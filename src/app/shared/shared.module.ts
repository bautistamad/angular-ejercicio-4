import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FiltrarPorPipe } from './filtrar-por.pipe';


@NgModule({
  declarations: [
    FiltrarPorPipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
