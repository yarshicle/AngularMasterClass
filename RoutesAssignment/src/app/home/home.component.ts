import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  archives = [
    {id: 1, month: 1, year: 2017},
    {id: 2, month: 2, year: 2017},
    {id: 3, month: 3, year: 2017}
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
