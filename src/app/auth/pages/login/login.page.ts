import { AuthProvider } from './../../../services/auth.types';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { OverlayService } from 'src/app/services/overlay.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  authForm: FormGroup;
  authProviders = AuthProvider;
  configs = {
    isSignIn: true,
    action: 'Entrar',
    actionChange: 'Criar Conta'
  };
  private nameControl = new FormControl('', [Validators.required, Validators.minLength(8)])

  constructor(private authService: AuthService, 
    private fb: FormBuilder,
    private overlayService: OverlayService) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get email(): FormControl {
    return <FormControl>this.authForm.get('email')
  }
  get password(): FormControl {
    return <FormControl>this.authForm.get('password')
  }
  get name(): FormControl {
    return <FormControl>this.authForm.get('name')
  }

  changeAuthAction(): void {
    this.configs.isSignIn = !this.configs.isSignIn;
    const { isSignIn } = this.configs;
    this.configs.action = isSignIn ? 'Entrar' : 'Criar Conta';
    this.configs.actionChange = isSignIn ? 'Criar Conta' : 'Já tenho uma conta!';
    !isSignIn 
      ? this.authForm.addControl('name', this.nameControl) 
      : this.authForm.removeControl('name')
  }

  async onSubmit(provider: AuthProvider): Promise<void> {
    const loading = await this.overlayService.loading();
    try{
      const credentials = await this.authService.authenticate({
        isSignIn: this.configs.isSignIn,
        user: this.authForm.value,
        provider
      });
      console.log('Autenticado => ', credentials)
      console.log('Redirect ')
    } catch(e) {
      console.log('Erro autenticação =>', e)
      await this.overlayService.toast({
        message: e.message
      });
    } finally{
      loading.dismiss();
    }
  }

}
