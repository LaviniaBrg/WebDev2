import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {TokenStorageService} from '../_services/token-storage.service';
import {Observable} from 'rxjs';

//const TOKEN_HEADER_KEY = 'Authorization';       // Spring Boot
const TOKEN_HEADER_KEY = 'x-access-token';        // Express

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private token: TokenStorageService) {
    }

//  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {   // Spring Boot
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {      // Express
        let authReq = req;
        const token = this.token.getToken();
        if (token != null) {
            //  authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });   //Spring Boot
            authReq = req.clone({headers: req.headers.set(TOKEN_HEADER_KEY, token)});             //Express
        }
        return next.handle(authReq);
    }
}

export const authInterceptorProviders = [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
];
