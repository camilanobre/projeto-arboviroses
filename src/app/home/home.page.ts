import { Home } from './models/home.model';
import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ModalSobrePage } from '../modal-sobre/modal-sobre.page';
import { ModalDuvidasPage } from '../modal-duvidas/modal-duvidas.page';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  home$: Observable<Home[]>;

  constructor(private nav : NavController,
  private modalController : ModalController,
  private router : Router) {}

  ngOnInit():void {
    this.home$ = of([
      { id: '354534', nome: ' paciente 1 ', done: false },
      { id: '545422', nome: ' paciente 2 ', done: false }
    ]);
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
  casoSuspeito(){
    this.router.navigate(['caso-suspeito']);
  }
}
