import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AlertOptions, LoadingOptions } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  constructor(
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) { }

  async alert(options?: AlertOptions): Promise <HTMLIonAlertElement> {
    const alert = await this.alertCtrl.create(options);
    await alert.present();
    // alert.dismiss()
    return alert;
  }

  async loading(options?: LoadingOptions): Promise <HTMLIonAlertElement> {
    const loading = await this.loadingCtrl.create()
  }
}
