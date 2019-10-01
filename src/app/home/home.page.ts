import { PacientesService } from './services/pacientes.service';
import { Home } from './models/home.model';
import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ModalSobrePage } from '../modal-sobre/modal-sobre.page';
import { ModalDuvidasPage } from '../modal-duvidas/modal-duvidas.page';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HomeSavePage } from './pages/home-save/home-save.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  home$: Observable<Home[]>;

  constructor(
  private pacientesService: PacientesService,
  private nav : NavController,
  private modalController : ModalController,
  private router : Router
  ) {}

  ionViewDidEnter():void {
    this.home$ = this.pacientesService.getAll();
  }

  async modalSobre(){
    const modal = await this.modalController.create({
      component: ModalSobrePage,
      cssClass: 'my-custom-modal-css'
    });
    modal.present()
  }
  async modalDuvidas(){
    const modal = await this.modalController.create({
      component: ModalDuvidasPage,
      cssClass: 'my-custom-modal-css'
    });
    modal.present()
  }
  async modalNovoPaciente(){
    const modal = await this.modalController.create({
      component: HomeSavePage,
      cssClass: 'my-custom-modal-css'
    });
    modal.present()
  }
  casoSuspeito(){
    this.router.navigate(['caso-suspeito']);
  }
}
