import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AppErrorHandler } from './common/app-error-handler';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseComponent } from './course/course.component';
import { DataAndEventsComponent } from './data-and-events/data-and-events.component';
import { DirectivesZippyComponent } from './directives-zippy/directives-zippy.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputFormatDirective } from './directives/input-format.directive';
import { FavoriteComponent } from './favorite/favorite.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CoursesComponent } from './otherComponents/courses.component';
import { PanelComponent } from './panel/panel.component';
import { SummaryPipe } from './pipelines/summary.pipe';
import { PostsComponent } from './posts/posts.component';
import { AuthorsService } from './services/authors.service';
import { CoursesService } from './services/courses.service';
import { GithubService } from './services/github.service';
import { PostService } from './services/post.service';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { TwitterlikeComponent } from './twitterlike/twitterlike.component';

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
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'followers/:id/:username', component: GithubProfileComponent},
      { path: 'followers', component: GithubFollowersComponent},
      { path: 'posts', component: PostsComponent},
      { path: '**', component: NotFoundComponent}
    ])
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
