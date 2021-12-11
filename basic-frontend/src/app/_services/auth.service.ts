import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:3000/api/authentifizieren/';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username: username,
      password: password
    });
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API, {
      username: username,
      email: email,
      password: password
    });
  }
}

