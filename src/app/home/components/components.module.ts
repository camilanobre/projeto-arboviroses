import { IonicModule } from '@ionic/angular';
import { HomeItemComponent } from './home-item/home-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HomeItemComponent
  ],
  imports: [
    CommonModule, IonicModule
  ],
  exports: [
    HomeItemComponent
  ]
})
export class ComponentsModule { }
