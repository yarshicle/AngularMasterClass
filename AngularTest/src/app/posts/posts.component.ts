import { Component, OnInit } from '@angular/core';

import { AppError } from './../common/app-error';
import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { PostService } from './../services/post.service';

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
    this.service.getAll()
    .subscribe(posts => this.posts = posts);
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = '';

    // this.http.post(this.url, JSON.stringify(post))
    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost.id;
        },
        (error: AppError) => {
          this.posts.splice(0, 1);

          if (error instanceof BadInput) {
            // this.form.setErrors(error.originalError);
            console.log('Bad Request');
          } else {
            throw error;
          }
      });
  }

  updatePost(post) {
    // this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true}))
    this.service.update(post.id, { isRead: true })
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
        },
        error => {
          if (error instanceof NotFoundError) {
            alert('Post not found');
          } else {
            throw error;
          }
      });
    // Many APIs do not have patch, so use put and send full object
    // this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    // this.http.delete(this.url + '/' + post.id)
    this.service.delete(post.id)
      .subscribe(
        null,
        (error: AppError) => {
          this.posts.splice(index, 0, post);
          console.log(error);
          if (error instanceof NotFoundError) {
            alert('This post has already been deleted');
          } else {
            throw error;
          }
      });
  }
}
