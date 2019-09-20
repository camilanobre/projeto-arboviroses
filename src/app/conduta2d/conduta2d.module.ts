import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Conduta2dPage } from './conduta2d.page';

const routes: Routes = [
  {
    path: '',
    component: Conduta2dPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Conduta2dPage]
})
export class Conduta2dPageModule {}
