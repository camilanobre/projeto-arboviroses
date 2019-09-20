import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ModalSobrePage } from '../modal-sobre/modal-sobre.page';
import { ModalDuvidasPage } from '../modal-duvidas/modal-duvidas.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private nav : NavController,
  private modalController : ModalController,
  private router : Router) {}

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
  casoSuspeito(){
    this.router.navigate(['caso-suspeito']);
  }
}
