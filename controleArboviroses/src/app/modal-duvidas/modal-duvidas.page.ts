import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-modal-duvidas',
  templateUrl: './modal-duvidas.page.html',
  styleUrls: ['./modal-duvidas.page.scss'],
})
export class ModalDuvidasPage {

  constructor( private nav : NavController,
    private modalController: ModalController
    ) { }

  closeModal(){
    this.modalController.dismiss();
  }

}
