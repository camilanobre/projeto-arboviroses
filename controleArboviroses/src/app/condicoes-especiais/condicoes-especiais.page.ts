import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-condicoes-especiais',
  templateUrl: './condicoes-especiais.page.html',
  styleUrls: ['./condicoes-especiais.page.scss'],
})
export class CondicoesEspeciaisPage implements OnInit {

  constructor(private nav : NavController,
    private modalController: ModalController) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalController.dismiss();
  }

}
