import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FiltrarPorPipe } from './pipes/filtrar-por.pipe';


@NgModule({
  declarations: [
    FiltrarPorPipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    FiltrarPorPipe
  ]
})
export class SharedModule { }
