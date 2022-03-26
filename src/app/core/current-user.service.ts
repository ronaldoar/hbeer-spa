import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';
import { Usuario } from './usuario-model';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  private userSubject = new BehaviorSubject<Usuario>(null!);

  constructor(private tokenService: TokenService) {
    if (this.tokenService.hasToken()) {
      this.decodeAndNotify();
    }
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null!);
  }

  getToken() {
    return this.tokenService.getToken();
  }

  removeToken() {
    this.tokenService.removeToken();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  private decodeAndNotify() {

    if (this.tokenService.getToken() !== null) {
      const token          = this.tokenService.getToken();
      const helper         = new JwtHelperService();
      const decodedToken   = helper.decodeToken(token!);
      const user: Usuario  = {

                                name: decodedToken.name,
                                preferredUsername: decodedToken.preferred_username,
                                givenName: decodedToken.givenName,
                                email: decodedToken.email,
                                roles: decodedToken.realm_access.roles
                             };
      this.userSubject.next(user);
    }
  }
}
