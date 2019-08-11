import { Component, OnInit } from '@angular/core';
import { DuvidaChoqueAlarmePage } from '../duvida-choque-alarme/duvida-choque-alarme.page';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conduta1b',
  templateUrl: './conduta1b.page.html',
  styleUrls: ['./conduta1b.page.scss'],
})
export class Conduta1bPage implements OnInit {

  constructor(private modalController : ModalController,
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
  conduta2c(){
    this.router.navigate(['conduta2c']);
  }
}
