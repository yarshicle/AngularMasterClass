import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from './../common/not-found-error';

@Injectable()
export class DataService {
  constructor(private url: string, private http: Http) { }

  getAll() {
    return this.http.get(this.url)
      .map(response => response.json())
      .catch(this.handleError);
  }
  create(resource: any) {
    return this.http.post(this.url, JSON.stringify(resource))
      .map(response => response.json())
      .catch(this.handleError);
  }
  update(id: number, resource: any) {
    return this.http.patch(this.url + '/' + id, JSON.stringify(resource))
      .map(response => response.json())
      .catch(this.handleError);
    // Many APIs do not have patch, so use put and send full object
    // this.http.put(this.url, JSON.stringify(post));
  }
  // delete(id: number) {
  //   return this.http.delete(this.url + '/' + id)
  //     .map(response => response.json())
  //     .catch(this.handleError);
  // }
  delete(id: number) {
    return this.http.delete(this.url + '/' + id)
      .map(response => response.json())
      // .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInput(error.json()));
    }
    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    }
    return Observable.throw(new AppError(error.json()));
  }
}
