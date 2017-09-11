import { SummaryPipe } from './pipelines/summary.pipe';
import { AuthorsService } from './services/authors.service';
import { AuthorsComponent } from './authors/authors.component';
import { CoursesService } from './services/courses.service';
import { CoursesComponent } from './otherComponents/courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { DataAndEventsComponent } from './data-and-events/data-and-events.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
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
    TwitterlikeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CoursesService, AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
