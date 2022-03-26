import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Observable } from 'rxjs';
import { CurrentUserService } from './current-user.service';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService  implements HttpInterceptor {

  token!: string;

  constructor(private serviceKeycloak: KeycloakService, private user: CurrentUserService) {
    this.serviceKeycloak.getToken().then(t => {this.token = t; this.user.setToken(t);  /*console.log(t);*/   });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

    req = req.clone({
        setHeaders: {
            Authorization: `Bearer ${this.token}`
          }
    });
    return next.handle(req);
  }
}
