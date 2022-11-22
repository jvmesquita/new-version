import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransicaoPage } from './transicao.page';

const routes: Routes = [
  {
    path: '',
    component: TransicaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransicaoPageRoutingModule {}
