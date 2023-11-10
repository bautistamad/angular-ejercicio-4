import { ResolveFn } from '@angular/router';
import { IHobby } from '../api/models/i-hobby';
import { inject } from '@angular/core';
import { HobbyResourceService } from '../api/resources/hobby-resource.service';

export const hobbyResolver: ResolveFn<IHobby[]> = (route, state) => {
  return inject(HobbyResourceService).get()
};
