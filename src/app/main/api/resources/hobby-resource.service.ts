import { Injectable } from '@angular/core';
import { IResourceMethodObservable, Resource,ResourceAction, ResourceHandler, ResourceParams, ResourceRequestMethod } from '@ngx-resource/core';
import { IHobby } from '../models/i-hobby';
import { environment } from 'src/environments/environment';

@Injectable()
@ResourceParams({
  pathPrefix: `${environment.apiUrl}/api/personas/actividades`
})
export class HobbyResourceService extends Resource{


  constructor(handler?: ResourceHandler) {
    super(handler);
  }

  @ResourceAction({
    path:'/listado',
    method: ResourceRequestMethod.Get
  })
  get!: IResourceMethodObservable<{}, IHobby[]>
}
