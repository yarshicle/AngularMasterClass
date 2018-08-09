import { MatComponentsModule } from './md-components.module';
import { CourseService } from './services/course.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EditCourseComponent } from './edit-course/edit-course.component';

@NgModule({
  declarations: [
    AppComponent,
    EditCourseComponent
  ],
  entryComponents: [
    EditCourseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatComponentsModule
    // MatCheckboxModule,
    // MatRadioModule,
    // MatSelectModule,
    // MatInputModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatIconModule,
    // MatButtonModule,
    // MatChipsModule,
    // MatProgressSpinnerModule,
    // MatTooltipModule,
    // MatTabsModule,
    // MatDialogModule
  ],
  providers: [
    CourseService,
    { provide: CourseService, useClass: CourseService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
