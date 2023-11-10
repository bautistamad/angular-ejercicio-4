import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { FormComponent } from './pages/form/form.component';
import { ListComponent } from './pages/list/list.component';


const routes: Routes = [
  { path: '', component: MainComponent, children: [
    { path: '', component: ListComponent },
    { path: 'formulario', component: FormComponent },
    {path: 'formulario/:id', component: FormComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainRoutingModule { }
