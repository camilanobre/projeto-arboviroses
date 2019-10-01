import { PacientesService } from '../home/services/pacientes.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Home } from '../home/models/home.model';


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.page.html',
  styleUrls: ['./pacientes.page.scss'],
})
export class PacientesPage {
  home$: Observable<Home[]>;

  constructor(
    private pacientesService: PacientesService,
  ) { }

  ionViewDidEnter():void {
    this.home$ = this.pacientesService.getAll();
  }

}
