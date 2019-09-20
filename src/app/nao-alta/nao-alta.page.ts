import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nao-alta',
  templateUrl: './nao-alta.page.html',
  styleUrls: ['./nao-alta.page.scss'],
})
export class NaoAltaPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  conduta2c(){
    this.router.navigate(['conduta2c'])
  }
  conduta2d(){
    this.router.navigate(['conduta2d'])
  }


}
