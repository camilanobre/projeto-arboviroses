import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
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
  { path: 'conduta2d', loadChildren: './conduta2d/conduta2d.module#Conduta2dPageModule' },
  { path: 'avaliar-alta', loadChildren: './avaliar-alta/avaliar-alta.module#AvaliarAltaPageModule' },
  { path: 'nao-alta', loadChildren: './nao-alta/nao-alta.module#NaoAltaPageModule' },
  { path: 'conduta2a', loadChildren: './conduta2a/conduta2a.module#Conduta2aPageModule' },
  { path: 'conduta2b', loadChildren: './conduta2b/conduta2b.module#Conduta2bPageModule' },
  { path: 'sobre', loadChildren: './sobre/sobre.module#SobrePageModule' },
  { path: 'duvidasfrequentes', loadChildren: './duvidasfrequentes/duvidasfrequentes.module#DuvidasfrequentesPageModule' },
  { path: 'login', loadChildren: './auth/pages/login/login.module#LoginPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
