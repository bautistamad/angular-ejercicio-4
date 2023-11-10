import { Injectable } from '@angular/core';
import { IResourceMethodObservable, Resource, ResourceAction, ResourceHandler, ResourceParams, ResourceRequestMethod } from '@ngx-resource/core';
import { environment } from 'src/environments/environment';
import { IEquipo } from '../models/i-equipo';

@Injectable()
@ResourceParams({
  pathPrefix: `${environment.apiUrl}/api/personas/equipos`
})
export class EquipoResourceService extends Resource{

  constructor(handler?: ResourceHandler) {
    super(handler);
  }

  @ResourceAction({
    path:'/listado',
    method: ResourceRequestMethod.Get
  })

  get!: IResourceMethodObservable<{}, IEquipo[]>
}
