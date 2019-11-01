import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Home } from '../../models/home.model';
import { PacientesService } from '../../services/pacientes.service';
import { NavController } from '@ionic/angular';
import { OverlayService } from 'src/app/services/overlay.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.page.html',
  styleUrls: ['./pacientes.page.scss'],
})

export class PacientesPage  {
  nome: Home[] = [];
  home$: Observable<Home[]>;
  buscaNome = '';

  constructor(
  private pacientesService: PacientesService,
  private navCtrl: NavController,
  private overlayService: OverlayService
  ) {}

  async ionViewDidEnter():Promise<void> {
    const loading = await this.overlayService.loading();
    this.home$ = this.pacientesService.getAll();
    this.home$.pipe(take(1)).subscribe(pacientes => loading.dismiss())
  }

  onUpdate(home: Home):void { 
    this.navCtrl.navigateForward(`/edit/${home.id}`)
  }

  
  async onDelete(home: Home): Promise<void> {
    await this.overlayService.alert({
      message: `Você deseja excluir o paciente "${home.nome}"?`,
      buttons: [
          {
            text: 'Sim',
            handler: async () => {
              await this.pacientesService.delete(home)
              await this.overlayService.toast({
                message: ` O paciente "${home.nome}" foi deletado!`
              })
            }
          },
          'Não'
      ]
    });
  }

  buscarPacientes ( event ) {
    const texto = event.target.value;
    this.buscaNome = texto
    console.log(texto);
  }
}
