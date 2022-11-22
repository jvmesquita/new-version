import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvaliarappPageRoutingModule } from './avaliarapp-routing.module';

import { AvaliarappPage } from './avaliarapp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvaliarappPageRoutingModule
  ],
  declarations: [AvaliarappPage]
})
export class AvaliarappPageModule {}
