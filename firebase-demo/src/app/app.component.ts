import { Subscription } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses$: FirebaseListObservable<any[]>;
  // course$;
  // author$;
  // courses: any[];
  // subscription: Subscription;

  constructor(private db: AngularFireDatabase) {
    this.courses$ = db.list('/courses');
    // this.course$ = db.object('/courses/1');
    // this.author$ = db.object('/authors/1');

    // this.subscription = db.list('/courses')
    //   .subscribe(courses => {
    //     this.courses = courses;
    //     console.log(this.courses);
    //   });
  }

  add(course: HTMLInputElement) {
    this.courses$.push({
      name: course.value,
      price: 150,
      isLive: true,
      sections: [
        {  title: 'Components'},
        {  title: 'Directives'},
        {  title: 'Templates'}
      ]
    });
    course.value = '';
  }

  update(course) {
    this.db.object('/courses/' + course.$key)
      .update({
        title: 'New Title: ' + course.$value,
        isLive: true
      });
  }

  delete(course) {
    this.db.object('/courses/' + course.$key)
      .remove()
      .then(x => console.log("Deleted"));
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}
