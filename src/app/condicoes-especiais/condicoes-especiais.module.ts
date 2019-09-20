import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CondicoesEspeciaisPage } from './condicoes-especiais.page';

const routes: Routes = [
  {
    path: '',
    component: CondicoesEspeciaisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CondicoesEspeciaisPage]
})
export class CondicoesEspeciaisPageModule {}
