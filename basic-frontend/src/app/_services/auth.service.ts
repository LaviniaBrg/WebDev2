import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../environments/environment";
import {TokenStorageService} from "./token-storage.service";

const AUTH_API = environment.backend_URL+'/api/authentifizieren/';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        private http: HttpClient,
        private tokenStorage: TokenStorageService
    ) {}

    getUser() {
        return this.tokenStorage.getUser()
    }

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
