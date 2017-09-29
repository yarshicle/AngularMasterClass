import { CourseService } from './../services/course.service';
import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  constructor(@Inject(MD_DIALOG_DATA) data: any) {
    console.log('Data', data);
  }

  ngOnInit() {
  }

}
