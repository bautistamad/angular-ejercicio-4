import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { FormComponent } from './pages/form/form.component';
import { ListComponent } from './pages/list/list.component';
import { personaResolver } from './resolvers/persona.resolver';
import { generoResolver } from './resolvers/genero.resolver';
import { HobbyResourceService } from './api/resources/hobby-resource.service';
import { hobbyResolver } from './resolvers/hobby.resolver';
import { nacionalidadResolver } from './resolvers/nacionalidad.resolver';
import { equipoResolver } from './resolvers/equipo.resolver';


const routes: Routes = [
  { path: '', component: MainComponent, children: [
    { path: '', component: ListComponent, resolve: {personas: personaResolver}},
    { path: 'formulario', component: FormComponent, resolve: {generos: generoResolver, actividades: hobbyResolver, nacionalidades: nacionalidadResolver, equipos: equipoResolver}},
    {path: 'formulario/:id', component: FormComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainRoutingModule { }
