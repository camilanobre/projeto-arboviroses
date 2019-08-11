import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DuvidaChoqueAlarmePage } from '../duvida-choque-alarme/duvida-choque-alarme.page';
import { CondicoesEspeciaisPage } from '../condicoes-especiais/condicoes-especiais.page';

@Component({
  selector: 'app-caso-suspeito',
  templateUrl: './caso-suspeito.page.html',
  styleUrls: ['./caso-suspeito.page.scss'],
})
export class CasoSuspeitoPage implements OnInit {

  constructor(private nav : NavController,
    private modalController : ModalController,
    private router : Router) { }

  ngOnInit() {
  }

  async modalChoqueAlarme(){
    const modal = await this.modalController.create({
      component: DuvidaChoqueAlarmePage,
      cssClass: 'my-custom-modal-css'
    });
    modal.present()
  }
  async modalCondicoes(){
    const modal = await this.modalController.create({
      component: CondicoesEspeciaisPage,
      cssClass: 'my-custom-modal-css'
    });
    modal.present()
  }
  conduta1b(){
    this.router.navigate(['conduta1b']);
  }
  conduta1a(){
    this.router.navigate(['conduta1a']);
  }


}
