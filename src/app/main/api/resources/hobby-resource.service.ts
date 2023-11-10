import { Injectable } from '@angular/core';
import { IResourceMethodObservable, Resource, ResourceAction, ResourceHandler, ResourceRequestMethod } from '@ngx-resource/core';
import { IHobby } from '../models/i-hobby';

@Injectable()
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
