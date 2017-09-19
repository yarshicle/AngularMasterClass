import { AuthHttp } from 'angular2-jwt';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  constructor(private authHttp: AuthHttp, private http: Http) {
  }

  getOrders() {
    // Using AuthHttp in constructor replaces below code
    // const headers = new Headers();
    // const token = localStorage.getItem('token');
    // headers.append('Authorization', 'Bearer ' + token);

    // const options = new RequestOptions({ headers: headers});
    // return this.http.get('/api/orders', options)

    return this.authHttp.get('/api/orders')
      .map(response => response.json());
  }
}
