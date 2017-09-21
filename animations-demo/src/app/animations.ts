import { trigger, state, style, transition, animate } from '@angular/animations';

export const fade = trigger('fade', [
  state('void', style({ opacity: 0 })),
  // 'void => *' == :enter; '* => void' == :leave; Can be written as 'void <=> *' for bidirectional transitions
  transition(':enter, :leave', [
    animate(1000)
  ])
]);

export const slide = trigger('slide', [
  transition(':enter', [
    style({ transform: 'translateX(-10px)'}),
    animate(500)
  ]),
  transition(':leave', [
    animate(1000, style({ transform: 'translateX(-100%)'}))
  ])
]);
