import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Criarconta2Page } from './criarconta2.page';

const routes: Routes = [
  {
    path: '',
    component: Criarconta2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Criarconta2PageRoutingModule {}
