import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class TokenGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        const hasToken = !!localStorage.getItem('token');
        if (!hasToken) {
            this.router.navigate(['/login']);
        }
        return hasToken;
    }

}
