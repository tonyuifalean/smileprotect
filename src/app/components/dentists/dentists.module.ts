import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DentistsComponent } from './dentists.component';
import { DentistsRoutingModule } from './dentists-routing.module';

@NgModule({
  declarations: [DentistsComponent],
  imports: [
    CommonModule,
    DentistsRoutingModule
  ]
})
export class DentistsModule { }
