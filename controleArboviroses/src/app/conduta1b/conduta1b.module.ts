import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Conduta1bPage } from './conduta1b.page';

const routes: Routes = [
  {
    path: '',
    component: Conduta1bPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Conduta1bPage]
})
export class Conduta1bPageModule {}
