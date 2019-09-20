import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ModalDuvidasPageModule } from './modal-duvidas/modal-duvidas.module';
import { ModalSobrePageModule } from './modal-sobre/modal-sobre.module';
import { CondicoesEspeciaisPageModule } from './condicoes-especiais/condicoes-especiais.module';
import { DuvidaChoqueAlarmePageModule } from './duvida-choque-alarme/duvida-choque-alarme.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ModalSobrePageModule,
    ModalDuvidasPageModule,
    CondicoesEspeciaisPageModule,
    DuvidaChoqueAlarmePageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
