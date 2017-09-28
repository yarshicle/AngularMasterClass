import { bounceOutLeftAnimation, fade, fadeInAnimation, slide } from './../animations';
import { Component } from '@angular/core';
import {
  animate,
  animateChild,
  animation,
  group,
  keyframes,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    trigger('todosAnimation', [
      transition(':enter', [
        group([
          query('h1', [
            style({ transform: 'translateY(-20px)' }),
            animate(1000)
          ]),
          query('@todoAnimation',
            stagger(200, animateChild()))
            // animateChild() will apply to a child animation. Can also call the animation as well with useAnimation
            // Or provide animation steps in an array, like below:
            // stagger(200, [
            //   style({ opacity: 0, transform: 'translateX(-20px) '}),
            //   animate(1000)
            // ]))
        ])
      ])
    ]),
    trigger('todoAnimation', [
      transition(':enter', [
        useAnimation(fadeInAnimation, {
          params: {
            duration: '0.5s'
          }
        })
      ]),
      transition(':leave', [
        style({ backgroundColor: 'red'}),
        animate(1000),
        useAnimation(bounceOutLeftAnimation)
      ])
    ])


    // fade,
    // slide
  ]
})
export class TodosComponent {
  items: any[] = [
    'Wash the dishes',
    'Call the accountant',
    'Apply for a car insurance'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = '';
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  animationStarted($event) {
    console.log($event);
  }
  animationDone($event) {
    console.log($event);
  }
}
