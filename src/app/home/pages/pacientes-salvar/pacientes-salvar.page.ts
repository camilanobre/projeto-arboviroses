import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { OverlayService } from 'src/app/services/overlay.service';
import { PacientesService } from '../../services/pacientes.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-pacientes-salvar',
  templateUrl: './pacientes-salvar.page.html',
  styleUrls: ['./pacientes-salvar.page.scss'],
})
export class PacientesSalvarPage implements OnInit {

  pacienteForm: FormGroup;
  pageTitle = '...';
  pacienteId: string = undefined

  constructor(private navCtrl : NavController,
              private fb: FormBuilder,
              private overlayService : OverlayService,
              private route: ActivatedRoute,
              private pacientesService: PacientesService) 
  { }

  ngOnInit():void {
    this.createForm();
    this.init();
  }

  init(): void {
    const pacienteId = this.route.snapshot.paramMap.get('id');
    if (!pacienteId) {
      this.pageTitle = 'Novo Paciente';
      return;
    }
    this.pacienteId = pacienteId;
    console.log('id => ', pacienteId)
    this.pageTitle = 'Editar Paciente';
    this.pacientesService.get(pacienteId)
      .pipe(take(1))
      .subscribe(({ nome })=> {
        this.pacienteForm.get('nome').setValue(nome)
      })
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
     //  console.log('paciente criado => ', paciente);
      this.navCtrl.navigateBack('/pacientes');
    } catch(error){
     //  console.log('erro ao salvar => ', error)
      await this.overlayService.toast({
        message: 'Erro ao salvar'
      });
    } finally {
      loading.dismiss();
    }
  }


}
