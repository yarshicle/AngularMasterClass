import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  viewMode = 'map';
  courses;
  // courses = [
  //   { id: 1, name: 'course1'},
  //   { id: 2, name: 'course2'},
  //   { id: 3, name: 'course3'}
  // ];
  task = {
    title: 'Review applications',
    assignee: {
      name: 'John Smith'
    }
  };

  onAdd() {
    this.courses.push({id: 4, name: 'course4'});
  }

  onRemove(course) {
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onChange(course) {
    course.name = 'updated';
  }

  loadCourses() {
    this.courses = [
      { id: 1, name: 'course1'},
      { id: 2, name: 'course2'},
      { id: 3, name: 'course3'}
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

}
