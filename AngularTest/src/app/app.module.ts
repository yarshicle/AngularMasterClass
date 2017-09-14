import { GithubService } from './services/github.service';
import { AppErrorHandler } from './common/app-error-handler';
import { HttpModule } from '@angular/http';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SummaryPipe } from './pipelines/summary.pipe';
import { AuthorsService } from './services/authors.service';
import { AuthorsComponent } from './authors/authors.component';
import { CoursesService } from './services/courses.service';
import { CoursesComponent } from './otherComponents/courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';

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
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { GithubFollowersComponent } from './github-followers/github-followers.component';

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
    ChangePasswordComponent,
    PostsComponent,
    GithubFollowersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    CoursesService,
    AuthorsService,
    PostService,
    GithubService,
    { provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
