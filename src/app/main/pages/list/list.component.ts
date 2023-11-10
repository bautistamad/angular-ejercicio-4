import { Component } from '@angular/core';
import { IPersona } from '../../api/models/i-persona';
import { PersonaResourceService } from '../../api/resources/persona-resource.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  personas: IPersona[] = [];

  constructor( private _service: PersonaResourceService,
                private router: Router){}

  ngOnInit(): void {
    this.listarPersonas();
  }

  listarPersonas(): void {
    this._service.get().subscribe({
      next: ( personas:IPersona[] ) => {
        this.personas = personas
      },
      error: ( err ) => {
        throw err;
      }
    })
  }

  editarPersona(nro_persona: number): void {
    // this._editService.addNumber(nro_persona);
    this.router.navigate(['/main/formulario', nro_persona]);

  }

  deletePersona( nro_persona : number) : void {
    this._service.delete({nro_persona}).subscribe({
      next: ( response ) => {
        // this.personas = personas
        console.log( "Borre una persona" + response)
        console.log( JSON.stringify(response) )

        this.personas.splice( this.personas.findIndex(p => p.nroPersona == nro_persona), 1)
        // if ( response ){
        //   console.log( this.personas )
        // }
      },
      error: ( err ) => {
        throw err;
      }
    })
  }
}
