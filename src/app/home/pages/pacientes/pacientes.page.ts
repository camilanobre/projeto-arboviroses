import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Home } from '../../models/home.model';
import { PacientesService } from '../../services/pacientes.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.page.html',
  styleUrls: ['./pacientes.page.scss'],
})

export class PacientesPage  {
  nome: Home[] = [];
  home$: Observable<Home[]>;
  buscaNome = ''

  constructor(
  private pacientesService: PacientesService,
  ) {}

  ionViewDidEnter():void {
    this.home$ = this.pacientesService.getAll();
  }

  buscarPacientes ( event ) {
    const texto = event.target.value;
    this.buscaNome = texto
    console.log(texto);
  }
}
