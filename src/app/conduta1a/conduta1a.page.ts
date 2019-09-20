import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-conduta1a',
  templateUrl: './conduta1a.page.html',
  styleUrls: ['./conduta1a.page.scss'],
})
export class Conduta1aPage implements OnInit {

  constructor(private router : Router,
    private navCtrl: NavController) { }

  ngOnInit() {
  }
  conduta2a(){
    this.router.navigate(['conduta2a'])
  }
  conduta2b(){
    this.router.navigate(['conduta2b'])
  }
  voltar(){
    this.navCtrl.back();
  }

}
