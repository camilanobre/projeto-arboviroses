import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public appPages = [
    { title: 'Home', url: '/home', icon: 'ios-home' },
    { title: 'Atendimentos', url: '/', icon: 'clipboard' },
    { title: 'Sobre', url: '/', icon: 'text' },  
    { title: 'Dúvidas Frequentes', url: '/', icon: 'help-circle-outline' }, 
    { title: 'Sair', url: '/', icon: 'log-out' },  
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
