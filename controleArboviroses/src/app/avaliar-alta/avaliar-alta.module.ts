import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AvaliarAltaPage } from './avaliar-alta.page';

const routes: Routes = [
  {
    path: '',
    component: AvaliarAltaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AvaliarAltaPage]
})
export class AvaliarAltaPageModule {}
