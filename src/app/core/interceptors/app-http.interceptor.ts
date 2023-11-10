import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../services/loader.service';


@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(private _loader: LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this._loader.start();

    return next.handle(request).pipe(
      finalize(() => this._loader.complete())
    );
  }
}