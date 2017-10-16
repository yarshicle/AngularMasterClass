import { EditCourseComponent } from './edit-course/edit-course.component';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isChecked = true;
  colors = [
    {id: 1, name: 'Red' },
    {id: 2, name: 'Green' },
    {id: 3, name: 'Blue' }
  ];

  color = 2;

  minDate = new Date(2017, 1, 1);
  maxDate = new Date(2017, 11, 1);

  categories = [
    { name: 'Beginner'},
    { name: 'Intermediate'},
    { name: 'Advanced'}
  ];

  progress = 0;
  timer;
  isLoading = false;
  constructor(private dialog: MatDialog) {
    this.timer = setInterval(() => {
      this.progress++;
      // tslint:disable-next-line:curly
      if (this.progress === 100) clearInterval(this.timer);
    }, 20);

    this.isLoading = true;
    this.getCourses()
      .subscribe(x => this.isLoading = false);
  }

  onChange($event) {
    console.log($event);
  }

  getCourses() {
    return Observable.timer(2000);
  }

  selectCategory(category) {
    this.categories
      .filter(c => c !== category)
      .forEach(c => c['selected'] = false);
    category.selected = !category.selected;
  }

  openDialog() {
    this.dialog.open(EditCourseComponent, {
      data: { courseId: 1 }
    })
      .afterClosed()
      .subscribe(result => console.log(result));
  }
}
