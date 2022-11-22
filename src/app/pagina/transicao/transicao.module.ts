import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransicaoPageRoutingModule } from './transicao-routing.module';

import { TransicaoPage } from './transicao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransicaoPageRoutingModule
  ],
  declarations: [TransicaoPage]
})
export class TransicaoPageModule {}
