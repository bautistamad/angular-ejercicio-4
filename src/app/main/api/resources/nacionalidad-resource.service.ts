import { Injectable } from '@angular/core';
import { IResourceMethodObservable, Resource, ResourceAction, ResourceHandler, ResourceParams, ResourceRequestMethod } from '@ngx-resource/core';
import { INacionalidad } from '../models/i-nacionalidad';
import { environment } from 'src/environments/environment';

@Injectable()
@ResourceParams({
  pathPrefix: `${environment.apiUrl}/nacionalidades`
})
export class NacionalidadResourceService extends Resource {

  constructor(handler?: ResourceHandler) {
    super(handler);
  }

  @ResourceAction({
    path:'/listado',
    method: ResourceRequestMethod.Get
  })
  get!: IResourceMethodObservable<{}, INacionalidad[]>
}
