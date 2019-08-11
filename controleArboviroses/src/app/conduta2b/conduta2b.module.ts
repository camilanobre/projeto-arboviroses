import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Conduta2bPage } from './conduta2b.page';

const routes: Routes = [
  {
    path: '',
    component: Conduta2bPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Conduta2bPage]
})
export class Conduta2bPageModule {}
