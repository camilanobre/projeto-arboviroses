import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conduta1a',
  templateUrl: './conduta1a.page.html',
  styleUrls: ['./conduta1a.page.scss'],
})
export class Conduta1aPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  conduta2a(){
    this.router.navigate(['conduta2a'])
  }
  conduta2b(){
    this.router.navigate(['conduta2b'])
  }

}