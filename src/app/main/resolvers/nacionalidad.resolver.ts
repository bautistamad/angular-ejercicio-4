import { ResolveFn } from '@angular/router';
import { INacionalidad } from '../api/models/i-nacionalidad';
import { NacionalidadResourceService } from '../api/resources/nacionalidad-resource.service';
import { inject } from '@angular/core';

export const nacionalidadResolver: ResolveFn<INacionalidad[]> = (route, state) => {
  return inject(NacionalidadResourceService).get()
};
