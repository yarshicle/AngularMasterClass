import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from './../services/github.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/combineLatest';
import { AppError } from './../common/app-error';
import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(private route: ActivatedRoute, private service: GithubService) {  }

  ngOnInit() {
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
      .switchMap(combined => {
        const id = combined[0].get('id');
        const page = combined[1].get('page');

        return this.service.getAll();
      })
      .subscribe(followers => this.followers = followers);
  }
}
