import { Injectable } from '@angular/core';
import { IResourceMethodObservable, Resource, ResourceAction, ResourceHandler, ResourceParams, ResourceRequestMethod } from '@ngx-resource/core';
import { environment } from 'src/environments/environment';
import { IPersona } from '../models/i-persona';
import { IPersonadata } from '../models/i-personadata';

@Injectable()
@ResourceParams({
  pathPrefix: `${environment.apiUrl}/api/personas`
})
export class PersonaResourceService extends Resource {

  constructor(handler?: ResourceHandler) {
    super(handler);
  }
  @ResourceAction({
    path: '/listado',
    method: ResourceRequestMethod.Get
  })
  get!: IResourceMethodObservable<void, IPersona[]>;


  @ResourceAction({
    path: '/datos/{!nro_persona}',
    method: ResourceRequestMethod.Get,
  })
  getPersona!: IResourceMethodObservable<{ nro_persona?: string }, IPersonadata>;

  @ResourceAction({
    path: '/persona',
    method: ResourceRequestMethod.Post,
  })
  post!: IResourceMethodObservable< IPersonadata , void>;

  @ResourceAction({
    path: '/{!nro_persona}',
    method: ResourceRequestMethod.Delete,
  })
  delete!: IResourceMethodObservable<{ nro_persona?: number }, void>;
}
