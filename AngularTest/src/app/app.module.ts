import { SignupFormComponent } from './signup-form/signup-form.component';
import { SummaryPipe } from './pipelines/summary.pipe';
import { AuthorsService } from './services/authors.service';
import { AuthorsComponent } from './authors/authors.component';
import { CoursesService } from './services/courses.service';
import { CoursesComponent } from './otherComponents/courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { DataAndEventsComponent } from './data-and-events/data-and-events.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { TwitterlikeComponent } from './twitterlike/twitterlike.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputFormatDirective } from './directives/input-format.directive';
import { DirectivesZippyComponent } from './directives-zippy/directives-zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    DataAndEventsComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    TwitterlikeComponent,
    DirectivesComponent,
    InputFormatDirective,
    DirectivesZippyComponent,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CoursesService, AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
