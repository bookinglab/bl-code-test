import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { PhotosViewComponent } from './photos-view/photos-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailViewComponent,
    PhotosViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true, },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
