import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalDuvidasPage } from './modal-duvidas.page';

const routes: Routes = [
  {
    path: '',
    component: ModalDuvidasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalDuvidasPage]
})
export class ModalDuvidasPageModule {}
