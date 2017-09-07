import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})

export class AuthorsComponent {
  title = 'Authors';
  authors: Array<string>;
  getAuthorsTitle() {
    return this.authors.length + ' Authors';
  }
  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
  }
}

