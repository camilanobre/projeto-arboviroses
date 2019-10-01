import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home-save',
  templateUrl: './home-save.page.html',
  styleUrls: ['./home-save.page.scss'],
})
export class HomeSavePage{

  constructor(private nav : NavController,
    private modalController: ModalController) { }

    closeModal(){
      this.modalController.dismiss();
    }

}
