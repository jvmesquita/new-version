import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pagina/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pagina/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pagina/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'criarconta',
    loadChildren: () => import('./pagina/criarconta/criarconta.module').then( m => m.CriarcontaPageModule)
  },
  {
    path: 'criarconta2',
    loadChildren: () => import('./pagina/criarconta2/criarconta2.module').then( m => m.Criarconta2PageModule)
  },
  {
    path: 'transicao',
    loadChildren: () => import('./pagina/transicao/transicao.module').then( m => m.TransicaoPageModule)
  },
  {
    path: 'priv',
    loadChildren: () => import('./menu/priv/priv.module').then( m => m.PrivPageModule)
  },
  {
    path: 'moeda',
    loadChildren: () => import('./menu/moeda/moeda.module').then( m => m.MoedaPageModule)
  },
  {
    path: 'avaliarapp',
    loadChildren: () => import('./menu/avaliarapp/avaliarapp.module').then( m => m.AvaliarappPageModule)
  },
  {
    path: 'idioma',
    loadChildren: () => import('./menu/idioma/idioma.module').then( m => m.IdiomaPageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./menu/sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'ajuda',
    loadChildren: () => import('./menu/ajuda/ajuda.module').then( m => m.AjudaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
