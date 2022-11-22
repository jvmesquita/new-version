import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivPage } from './priv.page';

const routes: Routes = [
  {
    path: '',
    component: PrivPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivPageRoutingModule {}
