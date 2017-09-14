import { GithubService } from './../services/github.service';
import { Component, OnInit } from '@angular/core';

import { AppError } from './../common/app-error';
import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(private service: GithubService) {  }

  ngOnInit() {
    // this.http.get(this.url)
    this.service.getAll()
    .subscribe(followers => this.followers = followers);
  }
}
