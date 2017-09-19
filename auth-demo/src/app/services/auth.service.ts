import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

  login(credentials) {
   return this.http.post('/api/authenticate',
      JSON.stringify(credentials))
      .map(response => {
        const result = response.json();
        if (result && result.token) {
          localStorage.setItem('token', result.token);
          return true;
        }
        return false;
      });
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return tokenNotExpired();
    // ^ does what v does
    // const jwtHelper  = new JwtHelper();
    // const token = localStorage.getItem('token');

    // if (!token) {
    //   return false;
    // }
    // const expirationDate = jwtHelper.getTokenExpirationDate(token);
    // const isExpired = jwtHelper.isTokenExpired(token);

    // console.log('Expiration', expirationDate);
    // console.log('isExpired', isExpired);

    // return !isExpired;
  }

  get currentUser() {
    const token = localStorage.getItem('token');
    // tslint:disable-next-line:curly
    if (!token) return null;

    return new JwtHelper().decodeToken(token);
  }
}

