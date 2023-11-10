import { ResolveFn } from '@angular/router';
import { IPersona } from '../api/models/i-persona';
import { inject } from '@angular/core';
import { PersonaResourceService } from '../api/resources/persona-resource.service';


export const personasResolver: ResolveFn<IPersona[]> = (route, state) => {
  return inject(PersonaResourceService).get()
};

export const personaResolver: ResolveFn<IPersona[]> = (route, state) => {
  return inject(PersonaResourceService).get({nro_persona: route.paramMap.get('nro_persona')!})
};

// export const videosResolver: ResolveFn<IVideo[]> = (route, state) => {
//   return inject(VideosResourceService).getVideos({idCategoria: route.paramMap.get('idCategoria')!});
// };