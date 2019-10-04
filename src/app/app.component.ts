import { AuthService } from './services/auth.service';
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

  user: firebase.User;

  public appPages = [
    { title: 'Home', url: '/home', icon: 'ios-home' },
    { title: 'Pacientes', url: '/pacientes', icon: 'contacts' },
    { title: 'Sobre', url: '/sobre', icon: 'text' },  
    { title: 'Dúvidas Frequentes', url: '/duvidasfrequentes', icon: 'help-circle-outline' }, 
    { title: 'Sair', url: '/', icon: 'log-out' },  
  ];

  constructor(
    private authService: AuthService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
   this.authService.authState$.subscribe(user => (this.user = user));    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
