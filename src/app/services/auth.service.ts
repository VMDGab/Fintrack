import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from '../shared/environment';
import { UserDTO } from '../core/layout/models/user.dto';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _isLoggedIn = signal(false); // depois isso pode vir de um token real
  readonly isLoggedIn = this._isLoggedIn.asReadonly(); // depois isso pode vir de um token real
  
  constructor(
    private http: HttpClient
  ){}

  login(email: string, password: string) {
    return this.http
      .post<UserDTO>(`${environment.baseURL}/v1/user/login`, { email, password })
      .pipe(tap(() => this._isLoggedIn.set(true)));
  }

  logout() {
    this._isLoggedIn.set(false);
  }

  register(username: string, email: string, password: string) {
    return this.http.post(`${environment.baseURL}/v1/user`, {
      username,
      email,
      password
    });
  }

}
