import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactMethods = [
    { id: 1, name: 'Email'},
    { id: 2, name: 'Phone'}
  ];

  categories = [
    {id: 1, name: 'Development'},
    {id: 2, name: 'Art'},
    {id: 3, name: 'Science'}
  ];

  log(x) {
    console.log(x);
  }

  submit(f) {
    console.log(f);
  }
}
