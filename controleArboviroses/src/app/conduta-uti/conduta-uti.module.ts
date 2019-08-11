import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CondutaUTIPage } from './conduta-uti.page';

const routes: Routes = [
  {
    path: '',
    component: CondutaUTIPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CondutaUTIPage]
})
export class CondutaUTIPageModule {}
