import { ResolveFn } from '@angular/router';
import { IEquipo } from '../api/models/i-equipo';
import { inject } from '@angular/core';
import { EquipoResourceService } from '../api/resources/equipo-resource.service';

export const equipoResolver: ResolveFn<IEquipo[]> = (route, state) => {
  return inject(EquipoResourceService).get()
};
