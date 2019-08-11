import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avaliar-alta',
  templateUrl: './avaliar-alta.page.html',
  styleUrls: ['./avaliar-alta.page.scss'],
})
export class AvaliarAltaPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  conduta2c(){
    this.router.navigate(['conduta2c'])
  }
  conduta2a(){
    this.router.navigate(['conduta2a'])
  }

}
