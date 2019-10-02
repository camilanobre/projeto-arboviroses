import { OverlayService } from './../../../services/overlay.service';
import { PacientesService } from './../../services/pacientes.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home-save',
  templateUrl: './home-save.page.html',
  styleUrls: ['./home-save.page.scss'],
})
export class HomeSavePage{

  pacienteForm: FormGroup

  constructor(private navCtrl : NavController,
              private fb: FormBuilder,
              private overlayService : OverlayService,
              private pacientesService: PacientesService) 
  { }

  ngOnInit():void {
    this.createForm();
  }

  private createForm(): void {
    this.pacienteForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  async onSubmit(): Promise<void> {
    const loading = await this.overlayService.loading({
      message: 'Salvando...'
    })
    try{
      const paciente = await this.pacientesService.create(this.pacienteForm.value);
      console.log('paciente criado => ', paciente);
      this.navCtrl.navigateBack('/home');
    } catch(error){
      console.log('erro ao salvar => ', error)
      await this.overlayService.toast({
        message: 'Erro ao salvar'
      });
    } finally {
      loading.dismiss();
    }
  }

}
