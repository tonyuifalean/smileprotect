import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DentistsComponent } from './dentists.component';


const routes: Routes = [
  {
    path: '',
    component: DentistsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DentistsRoutingModule { }
