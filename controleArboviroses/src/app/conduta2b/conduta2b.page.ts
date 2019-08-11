import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conduta2b',
  templateUrl: './conduta2b.page.html',
  styleUrls: ['./conduta2b.page.scss'],
})
export class Conduta2bPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  conduta2a(){
    this.router.navigate(['conduta2a'])
  }

  conduta2c(){
    this.router.navigate(['conduta2c'])
  }

}
