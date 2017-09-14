import { BadInput } from './../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {  }

  ngOnInit() {
    // this.http.get(this.url)
    this.service.getPosts()
    .subscribe(
      response => {
        this.posts = response.json();
      },
      error => {
        alert('An unexpected error occurred.');
        console.log(error);
    });
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };
    input.value = '';
    // this.http.post(this.url, JSON.stringify(post))
    this.service.createPost(post)
      .subscribe(
        response => {
          post['id'] = response.json().id;
          this.posts.splice(0, 0, post);
        },
        (error: AppError) => {
          if (error instanceof BadInput) {
            // this.form.setErrors(error.originalError);
            console.log('Bad Request');
          } else {
            alert('An unexpected error occurred.');
            console.log(error);
          }
      });
  }

  updatePost(post) {
    // this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true}))
    this.service.updatePost(post.id, { isRead: true })
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          alert('An unexpected error occurred.');
          console.log(error);
      });
    // Many APIs do not have patch, so use put and send full object
    // this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(post) {
    // this.http.delete(this.url + '/' + post.id)
    this.service.deletePost(post.id)
      .subscribe(
        response => {
          const index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
          console.log(response);
        },
        (error: AppError) => {
          console.log(error);
          if (error instanceof NotFoundError) {
            alert('This post has already been deleted');
          } else {
            alert('An unexpected error occurred.');
            console.log(error);
          }
      });
  }
}
