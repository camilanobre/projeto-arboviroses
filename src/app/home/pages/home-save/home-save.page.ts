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

  constructor(private nav : NavController,
                      private fb: FormBuilder) 
  { }

  ngOnInit():void {
    this.createForm();
  }

  private createForm(): void {
    this.pacienteForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  onSubmit(): void {
    console.log('cadastro de paciente => ' , this.pacienteForm.value )
  }

}
