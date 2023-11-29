import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Futbol1Page } from './futbol1.page';

const routes: Routes = [
  {
    path: '',
    component: Futbol1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Futbol1PageRoutingModule {}
