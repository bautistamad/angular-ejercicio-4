import { Injectable } from '@angular/core';
import { IResourceMethodObservable, Resource, ResourceAction, ResourceHandler, ResourceParams, ResourceRequestMethod } from '@ngx-resource/core';
import { environment } from 'src/environments/environment';
import { IPersona } from '../models/i-persona';
import { IPersonadata } from '../models/i-personadata';

@Injectable()
@ResourceParams({
  pathPrefix: `${environment.apiUrl}/personas`
})
export class PersonaResourceService extends Resource {

  constructor(handler?: ResourceHandler) {
    super(handler);
   }

   @ResourceAction({
    path: '/listado',
    method: ResourceRequestMethod.Get
   })
   get!: IResourceMethodObservable<{},IPersona[]>;


   @ResourceAction({
    path: '/{!nro_persona}',
    method: ResourceRequestMethod.Get,
   })
   getPersona!: IResourceMethodObservable<{nro_persona?: number},IPersonadata[]>;

   @ResourceAction({
    path: '/persona',
    method: ResourceRequestMethod.Post,
   })
   post!: IResourceMethodObservable<{persona: IPersonadata},{}>;

   @ResourceAction({
    path: '/{!nro_persona}',
    method: ResourceRequestMethod.Delete,
   })
   delete!: IResourceMethodObservable<{nro_persona?: number},IPersona[]>;
}
