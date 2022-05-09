import {animate, animateChild, query, stagger, style, transition, trigger,state} from "@angular/animations";


export class Animations {
    public static fadeIn = trigger('fadeIn', [
        transition(':enter', [
            style({ opacity: '0', marginTop: '10px'}),
            animate('.5s ease-in', style({ opacity: '1', marginTop: '0px' })),
        ]),
    ]);
    public static stagger =  trigger('stagger', [
        transition(':enter', [
            query(':enter', stagger('.2s', [animateChild()]),{ optional: true })
        ])
    ]);
    public static fadeInOut=  trigger('fadeInOut', [
        state('in', style({ opacity: 1 })),
        state('out', style({ opacity: 0 })),
  
        transition('out => in', [
          style({ opacity: 0 }),
          animate('1s 200ms ease-out', style({ opacity: 1 }))
        ]),
        transition('in => out', [
          style({ opacity: 0 }),
          animate('1s 200ms ease-out', style({ opacity: 0 }))
        ]),
        transition('void => *', [
          style({ opacity: 0 }),
          animate('1s 200ms ease-out', style({ opacity: 1 }))
        ]),
        transition('* => void', [
          animate('1s 200ms ease-out', style({ opacity: 0 }))
        ]),
      ])
}
