import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-duvida-choque-alarme',
  templateUrl: './duvida-choque-alarme.page.html',
  styleUrls: ['./duvida-choque-alarme.page.scss'],
})
export class DuvidaChoqueAlarmePage implements OnInit {

  constructor(private nav : NavController,
    private modalController: ModalController) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalController.dismiss();
  }
}
