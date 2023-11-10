import { ResolveFn } from '@angular/router';
import { IPersona } from '../api/models/i-persona';
import { inject } from '@angular/core';
import { PersonaResourceService } from '../api/resources/persona-resource.service';


export const personaResolver: ResolveFn<IPersona[]> = (route, state) => {
  return inject(PersonaResourceService).get()
};
