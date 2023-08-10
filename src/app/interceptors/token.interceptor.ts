import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpParams,
  HttpParamsOptions
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    const httpOptions = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json'
      }),
      params: new HttpParams({ fromString: `client_id=${environment.unsplashAccessKey}` })
     };

    const modifiedReq = request.clone(httpOptions);

    return next.handle(modifiedReq);
  }
}
