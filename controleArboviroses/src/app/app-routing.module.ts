import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'modal-sobre', loadChildren: './modal-sobre/modal-sobre.module#ModalSobrePageModule' },
  { path: 'modal-duvidas', loadChildren: './modal-duvidas/modal-duvidas.module#ModalDuvidasPageModule' },
  { path: 'caso-suspeito', loadChildren: './caso-suspeito/caso-suspeito.module#CasoSuspeitoPageModule' },
  { path: 'duvida-choque-alarme', loadChildren: './duvida-choque-alarme/duvida-choque-alarme.module#DuvidaChoqueAlarmePageModule' },
  { path: 'condicoes-especiais', loadChildren: './condicoes-especiais/condicoes-especiais.module#CondicoesEspeciaisPageModule' },
  { path: 'conduta1a', loadChildren: './conduta1a/conduta1a.module#Conduta1aPageModule' },
  { path: 'conduta1b', loadChildren: './conduta1b/conduta1b.module#Conduta1bPageModule' },
  { path: 'conduta2c', loadChildren: './conduta2c/conduta2c.module#Conduta2cPageModule' },
  { path: 'conduta-uti', loadChildren: './conduta-uti/conduta-uti.module#CondutaUTIPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
