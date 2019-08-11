import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Conduta2aPage } from './conduta2a.page';

const routes: Routes = [
  {
    path: '',
    component: Conduta2aPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Conduta2aPage]
})
export class Conduta2aPageModule {}
