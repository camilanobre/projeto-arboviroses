import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conduta2c',
  templateUrl: './conduta2c.page.html',
  styleUrls: ['./conduta2c.page.scss'],
})
export class Conduta2cPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  avaliarAlta(){
    this.router.navigate(['avaliar-alta']);
  }
  naoAlta(){
    this.router.navigate(['nao-alta'])
  }

}
