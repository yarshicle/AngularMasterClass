import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-and-events',
  templateUrl: './data-and-events.component.html',
  styleUrls: ['./data-and-events.component.css']
})
export class DataAndEventsComponent {

  isActive = false;
  isFavorite = false;
  email = 'me@example.com';
  titleValue: string;

  onDivClicked() {
    console.log('Div was clicked');
  }

  onSave($event) {
    $event.stopPropagation(); // stops event bubbling (onDivClicked will not be called)
    console.log('button was clicked', $event);
  }

  onKeyUp() {
    console.log(this.email);
  }

  onStarClick() {
    this.isFavorite = !this.isFavorite;
  }

}
