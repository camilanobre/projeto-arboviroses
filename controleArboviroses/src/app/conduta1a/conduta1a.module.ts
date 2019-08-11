import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Conduta1aPage } from './conduta1a.page';

const routes: Routes = [
  {
    path: '',
    component: Conduta1aPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Conduta1aPage]
})
export class Conduta1aPageModule {}
