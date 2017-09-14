import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from './../common/not-found-error';

@Injectable()
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url);
  }
  createPost(post: any) {
    return this.http.post(this.url, JSON.stringify(post))
      .catch((error: Response) => {
        if (error.status === 400) {
          return Observable.throw(new BadInput(error.json()));
        }
        return Observable.throw(new AppError(error.json()));
      });
  }
  updatePost(id: number, post: any) {
    return this.http.patch(this.url + '/' + id, JSON.stringify(post));
  }
  deletePost(id: number) {
    return this.http.delete(this.url + '/' + id)
      .catch((error: Response) => {
        if (error.status === 404) {
          return Observable.throw(new NotFoundError());
        }
        return Observable.throw(new AppError(error.json()));
      });
  }
}
