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
import { IPersona } from '../../api/models/i-persona';
import { JsonPipe } from '@angular/common';

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
  persona!: IPersonadata;
  submitted: boolean = false;
  showInfo: boolean = false;

  constructor(private _fb: FormBuilder,
    private _personaService: PersonaResourceService,
    private _route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.loadData();
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

rellenarForm(): void {
  this.form.patchValue({apellido: this.persona.apellido});
  this.form.patchValue({nombre: this.persona.nombre});
  this.form.patchValue({correo: this.persona.correo});
  this.form.patchValue({clave: this.persona.clave});
  this.form.patchValue({codGenero: this.persona.codGenero});
  this.form.patchValue({fechaNacimiento: this.persona.fechaNacimiento});
  this.form.patchValue({codNacionalidad: this.persona.codNacionalidad});
  this.form.patchValue({equipos: JSON.parse(this.persona.equipos)});
  this.form.patchValue({otrasActividades: this.persona.otrasActividades});
  let hobbies = JSON.parse(this.persona.hobbies);
  if (hobbies) {
    hobbies.forEach((hobby: number) => {
      console.log(hobby)
      this.actividadesArray.push(new FormControl(hobby));
      let h = this.actividades.find(a => a.id == hobby);
      if (h) {
        h.checked = true;
      }
    });
  }
}

listarDatosResolver(): void {

  console.log(this._route.snapshot.params['nro_persona']);

  // ( this._route.snapshot.params['nro_persona'] != 0 )
    this._route.data.subscribe((data) => {
      this.generos = data["generos"];
      this.equipos = data["equipos"];
      this.actividades = data["actividades"];
      this.nacionalidades = data["nacionalidades"];
      this.persona = data["persona"];
      this.initForm();
      if (this.persona) {
        this.rellenarForm();
      }
    })
  }


  private loadData() {
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
