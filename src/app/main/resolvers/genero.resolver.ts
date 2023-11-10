import { ResolveFn } from '@angular/router';
import { IGenero } from '../api/models/i-genero';
import { inject } from '@angular/core';
import { GeneroResourceService } from '../api/resources/genero-resource.service';

export const generoResolver: ResolveFn<IGenero[]> = (route, state) => {
  return inject(GeneroResourceService).get()
};
