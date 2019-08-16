import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DuvidasfrequentesPage } from './duvidasfrequentes.page';

const routes: Routes = [
  {
    path: '',
    component: DuvidasfrequentesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DuvidasfrequentesPage]
})
export class DuvidasfrequentesPageModule {}
