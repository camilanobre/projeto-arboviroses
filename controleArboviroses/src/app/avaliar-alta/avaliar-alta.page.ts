import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-avaliar-alta',
  templateUrl: './avaliar-alta.page.html',
  styleUrls: ['./avaliar-alta.page.scss'],
})
export class AvaliarAltaPage implements OnInit {

  constructor(private router : Router,
    private navCtrl: NavController ) { }

  ngOnInit() {
  }
  conduta2a(){
    this.router.navigate(['conduta2a'])
  }
  conduta2c(){
    this.router.navigate(['conduta2c'])
  }
  voltar(){
    this.navCtrl.back();
  }

}
