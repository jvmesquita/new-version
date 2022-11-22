import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvaliarappPage } from './avaliarapp.page';

const routes: Routes = [
  {
    path: '',
    component: AvaliarappPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvaliarappPageRoutingModule {}
