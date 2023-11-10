import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { PersonaResourceService } from './api/resources/persona-resource.service';
import { NacionalidadResourceService } from './api/resources/nacionalidad-resource.service';
import { HobbyResourceService } from './api/resources/hobby-resource.service';
import { EquipoResourceService } from './api/resources/equipo-resource.service';
import { GeneroResourceService } from './api/resources/genero-resource.service';
import { FormComponent } from './pages/form/form.component';
import { ListComponent } from './pages/list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';



@NgModule({
  declarations: [
    MainComponent,
    FormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MainRoutingModule
  ],
  providers: [
    PersonaResourceService,
    NacionalidadResourceService,
    HobbyResourceService,
    EquipoResourceService,
    GeneroResourceService
  ]

})
export class MainModule { }
