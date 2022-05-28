import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse } from './login.response';
import { tap } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public http : HttpClient,
  ) { }

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('/login', {email, password})
      .pipe(
        tap<LoginResponse>(value => {
          if (value.token != null) {
            localStorage.setItem('auth', JSON.stringify(value));
          }
        })
      );
  }

  logout(): void {
    localStorage.removeItem('auth');
  }

  getAuthInfo(): LoginResponse | null {
    if (!this.isUserLoggedIn()) {
      return null;
    }
    return JSON.parse(localStorage.getItem('auth')!) as LoginResponse;
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem('auth') !== null;
  }

  getToken(): string | null {
    if (!this.isUserLoggedIn()) {
      return null;
    }

    return this.getAuthInfo()!.token;
  }

  getUser(): User | null {
    if (!this.isUserLoggedIn()) {
      return null;
    }

    return this.getAuthInfo()!.user;
  }

}
