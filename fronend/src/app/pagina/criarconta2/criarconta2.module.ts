import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Criarconta2PageRoutingModule } from './criarconta2-routing.module';

import { Criarconta2Page } from './criarconta2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Criarconta2PageRoutingModule
  ],
  declarations: [Criarconta2Page]
})
export class Criarconta2PageModule {}
