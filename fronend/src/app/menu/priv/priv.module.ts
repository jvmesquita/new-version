import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivPageRoutingModule } from './priv-routing.module';

import { PrivPage } from './priv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivPageRoutingModule
  ],
  declarations: [PrivPage]
})
export class PrivPageModule {}
