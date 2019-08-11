import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DuvidaChoqueAlarmePage } from './duvida-choque-alarme.page';

const routes: Routes = [
  {
    path: '',
    component: DuvidaChoqueAlarmePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DuvidaChoqueAlarmePage]
})
export class DuvidaChoqueAlarmePageModule {}
