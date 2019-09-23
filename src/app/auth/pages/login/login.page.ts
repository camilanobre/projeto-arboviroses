import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  authForm: FormGroup;
  configs = {
    isSignIn: true,
    action: 'Entrar',
    actionChange: 'Criar Conta'
  };
  private nameControl = new FormControl('', [Validators.required, Validators.minLength(8)])

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get email(): FormControl {
    return <FormControl>this.authForm.get('email')
  }
  get senha(): FormControl {
    return <FormControl>this.authForm.get('senha')
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

  onSubmit(): void {
    console.log('Dados de Formulario', this.authForm.value)
  }

}
