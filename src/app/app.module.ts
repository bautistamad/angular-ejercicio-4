import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResourceModule } from '@ngx-resource/handler-ngx-http'
import { CoreModule } from './core/core.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptor } from './core/interceptors/app-http.interceptor';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    ResourceModule.forRoot()

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
