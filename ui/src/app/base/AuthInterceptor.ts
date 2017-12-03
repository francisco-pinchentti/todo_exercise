
import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

function needsAuthentication(request: HttpRequest<any>): boolean {
    return !(request.url === '/api/login' && request.method === 'POST');
}

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor() { }



    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (needsAuthentication(request)) {
            const token = localStorage.getItem('token');
            request = request.clone({
                setHeaders: {
                    authorization: token
                }
            });
        }
        return next.handle(request);
    }
}
