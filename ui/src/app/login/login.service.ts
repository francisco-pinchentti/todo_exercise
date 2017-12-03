import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string): Observable<any> {
    const loginData = {
      email: email,
      password: password
    };
    return this.http
      .post('/api/login', loginData);
  }

  logout(token: string): Observable<any> {
      return this.http.delete(`/api/login/${token}`);
  }

}
