import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Futbol1PageRoutingModule } from './futbol1-routing.module';

import { Futbol1Page } from './futbol1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Futbol1PageRoutingModule,
  ],
  declarations: [Futbol1Page]
})
export class Futbol1PageModule {}
