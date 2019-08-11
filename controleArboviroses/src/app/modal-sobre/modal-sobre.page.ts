import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-sobre',
  templateUrl: './modal-sobre.page.html',
  styleUrls: ['./modal-sobre.page.scss'],
})
export class ModalSobrePage  {

  constructor( private nav : NavController,
    private modalController: ModalController
    ) { }

  closeModal(){
    this.modalController.dismiss();
  }
}
