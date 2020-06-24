import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

import { TranslationLoaderFactory } from '@app/app.module';
import { HistoryComponent } from './history.component';
import { HistoryRoutingModule } from './history-routing.module';

@NgModule({
  declarations: [HistoryComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    TranslateModule.forChild({
      loader: {provide: TranslateModule, useFactory: TranslationLoaderFactory, deps: [HttpClient]}
    })
  ]
})
export class HistoryModule { }
