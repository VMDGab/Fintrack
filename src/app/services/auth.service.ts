import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _isLoggedIn = signal(false); // depois isso pode vir de um token real
  readonly isLoggedIn = this._isLoggedIn.asReadonly(); // depois isso pode vir de um token real
 
  login() {
    this._isLoggedIn.set(true);
    // futuramente: salvar token, chamar API, etc.
  }

  logout() {
    this._isLoggedIn.set(false);
  }
}