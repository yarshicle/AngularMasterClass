import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'zippy',
  templateUrl: './directives-zippy.component.html',
  styleUrls: ['./directives-zippy.component.css']
})
export class DirectivesZippyComponent {
  @Input('title') title: string;
  isExpanded: boolean;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
