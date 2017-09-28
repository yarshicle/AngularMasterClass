import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MdCheckboxModule, MdRadioModule, MdSelectModule, MdInputModule, MatDatepickerModule, MdNativeDateModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdCheckboxModule,
    MdRadioModule,
    MdSelectModule,
    FormsModule,
    MdInputModule,
    MatDatepickerModule,
    MdNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
