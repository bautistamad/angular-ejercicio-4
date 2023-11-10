import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IGenero } from '../../api/models/i-genero';
import { IEquipo } from '../../api/models/i-equipo';
import { IHobby } from '../../api/models/i-hobby';
import { INacionalidad } from '../../api/models/i-nacionalidad';
import { NacionalidadResourceService } from '../../api/resources/nacionalidad-resource.service';
import { GeneroResourceService } from '../../api/resources/genero-resource.service';
import { HobbyResourceService } from '../../api/resources/hobby-resource.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipoResourceService } from '../../api/resources/equipo-resource.service';
import { PersonaResourceService } from '../../api/resources/persona-resource.service';
import { IPersonadata } from '../../api/models/i-personadata';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  form!: FormGroup;
  generos: IGenero[] = [];
  equipos: IEquipo[] = [];
  actividades: IHobby[] = [];
  nacionalidades: INacionalidad[] = [];
  submitted: boolean = false;
  showInfo: boolean = false;

  constructor(private _fb: FormBuilder,
    private _personaService: PersonaResourceService,
    private _route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.loadData();
    this.initForm();
  }
  private initForm(): void {
    this.form = this._fb.group({
      apellido: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      clave: new FormControl('', [Validators.required]),
      confirmar_clave: new FormControl('', [Validators.required]),
      codGenero: [this.generos.find(g => g.selected)?.codigo],
      fechaNacimiento: [''],
      codNacionalidad: [this.nacionalidades.find(g => g.selected)?.codigo],
      equipos: [''],
      actividades: this._fb.array([]),
      otrasActividades: [''],
    });
  }

listarDatosResolver(): void {
  // this._route.data.subscribe((data) => {
  //   this.generos = data["generos"],
  //   this.equipos = data["equipos"],
  //   this.actividades = data["actividades"],
  //   this.nacionalidades = data["nacionalidades"]
  // })

  console.log(this._route.snapshot.params['nro_persona']);

  if ( this._route.snapshot.params['nro_persona'] != 0 ){
    this._route.data.subscribe((data) => {
      this.generos = data["generos"],
      this.equipos = data["equipos"],
      this.actividades = data["actividades"],
      this.nacionalidades = data["nacionalidades"]
      console.log(data["persona"])
    })
  } else{ 
    this._route.data.subscribe((data) => {
      this.generos = data["generos"],
      this.equipos = data["equipos"],
      this.actividades = data["actividades"],
      this.nacionalidades = data["nacionalidades"]
    })
  }
}



  private loadData() {


    // this.listarNacionalidades();
    // this.listarGeneros();
    // this.listarHobbies();
    // this.listarEquipos();
    this.listarDatosResolver();
  }


  showData(): void {
    this.submitted = true;
    if (this.form.valid) {
      this.showInfo = true;
    }
    console.log(this.form.value);
  }

  reset(): void {
    this.submitted = false;
    this.initForm();
  }

  back(): void {
    this.showInfo = false;
    this.reset();
  }

  get actividadesArray(): FormArray {
    return this.form.controls['actividades'] as FormArray;
  }

  private loadPersona(nroPersona: number): void {
    // Nota que estamos pasando un objeto con la propiedad `nro_persona`
    // this._personaService.getPersona({ nro_persona: nroPersona }).subscribe({
    //   next: (persona: IPersonadata[]) => {
    //     console.log(JSON.stringify(persona));
    //     this.form.setValue({
    //       apellido: persona[0].apellido,
    //       nombre: persona[0].nombre,
    //       correo: persona[0].correo,
    //       clave: persona[0].clave, // Asumiendo que quieres mostrar la clave en el formulario
    //       confirmar_clave: [''],
    //       codGenero: [this.generos.find(g => g.nombre == persona[0].nomGenero)],
    //       fechaNacimiento: persona[0].fechaNacimiento,
    //       // codNacionalidad: [this.nacionalidades.find(g => g.codigo == persona[0].codigo)],
    //       codNacionalidad: [""],
    //       // equipos: [this.equipos.find(g => g.id == persona[0].equipos[0])],
    //       equipos: [""],
    //       // actividades: [this.actividades.find(g => g.id == persona[0].actividades[0])],
    //       actividades: [""],
    //       otrasActividades: ['']
    //     });

    //   },
    //   error: (err) => {
    //     // Aquí puedes manejar el error
    //     console.error('Error al cargar la persona:', err);
    //   }
    // });
  }

  agregarPersona(): void {
    this.submitted = true;
    console.log("form ",JSON.stringify(this.form.value));
    const { confirmar_clave, ...formData } = this.form.value;
    console.log(" formdata ",JSON.stringify(formData));

    if (this.form.valid) {
      this._personaService.post(formData).subscribe({
        next: (response) => {
          console.log(response);
          console.log("Insercion exitosa");
          this.router.navigate(['/main']);
        },
        error: (error) => {
          console.log(error)
          console.log("Insercion fallida");
        }
      })
    }
  }

  setHobby(event: any): void {
    // console.log(event);
    if (event.target.checked) {
      this.actividadesArray.push(new FormControl(Number(event.target.value)));
    } else {
      let index = this.actividadesArray.controls.findIndex(h => h.value == event.target.value);
      if (index >= 0)
        this.actividadesArray.removeAt(index);
    }
  }
}
