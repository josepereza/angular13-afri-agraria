import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('entrada-izq', [
      state('in', style({ transform: 'translateX(0)' })),
      state('out', style({ transform: 'translateX(-100%)' })),
      transition('out <=> in', [
        animate(500)
      ]),

      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({ transform: 'translateX(100%)' }))
      ])

    ]),
    trigger('fadeIn', [
      state('in', style({ opacity: 0 })),
      state('out', style({ opacity: 0 })),

      transition('out => in', [
        style({ opacity: 0 ,transform:'scale(0)'}),
        animate('4.5s 300ms ease-out', style({ opacity: 1,transform:'scale(1)' })),
        animate('2.5s 200ms ease-out', style({ opacity: 1,transform:'scale(0)' }))

      ]),
      transition('in => out', [
        style({ opacity: 0 }),
        animate('2.7s 200ms ease-out', style({ opacity: 0 }))
      ]),
      transition('void => *', [
        style({ opacity: 0,transform:'scale(0)' }),
        animate('2.5s 200ms ease-out', style({ opacity: 1,transform:'scale(1)' })),
        animate('2.5s 2500ms ease-out', style({ opacity: 0,transform:'scale(0)' })),

      ]),
      transition('* => void', [
        animate('4.5s 2500ms ease-out', style({ opacity: 0,transform:'scale(0)' })),

        animate('2.5s 200ms ease-out', style({ opacity: 0 }))
      ]),
    ]),

    trigger('fadeIn2', [
      state('in', style({ opacity: 1 })),
      state('out', style({ opacity: 0 })),

      transition('out => in', [
        style({ opacity: 0 ,transform:'scale(0)'}),
        animate('3.5s 1900ms ease-out', style({ opacity: 1,transform:'scale(1)' }))
      ]),
      transition('in => out', [
        style({ opacity: 0 }),
        animate('2.7s 2100ms ease-out', style({ opacity: 0 }))
      ]),
      transition('void => *', [
        style({ opacity: 0,transform: 'scale(0)' }),
        animate('3.5s 2100ms ease-out', style({ opacity: 1,transform:'scale(1)' }))
      ]),
      transition('* => void', [
        animate('2.7s 200ms ease-out', style({ opacity: 0 }))
      ]),
    ]),
  ]
})
export class HeaderComponent implements OnInit {
  isOpen: boolean = true;
  isOpen2: boolean = true;
  constructor() {
    
    
  }

  ngOnInit(): void {

  }
  activate() {
    this.isOpen = true
    this.isOpen2 = true
  }
  desactivate() {
    this.isOpen = false
    this.isOpen2 = false
  }
}
