import { Injectable } from '@angular/core';

const TOKEN_KEY = 'token_key';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  hasToken() {
    return !!this.getToken();
  }

  setToken(token: string) {
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  getToken() {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  removeToken() {
    window.localStorage.removeItem(TOKEN_KEY);
  }
}
