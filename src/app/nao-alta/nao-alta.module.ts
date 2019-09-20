import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NaoAltaPage } from './nao-alta.page';

const routes: Routes = [
  {
    path: '',
    component: NaoAltaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NaoAltaPage]
})
export class NaoAltaPageModule {}
