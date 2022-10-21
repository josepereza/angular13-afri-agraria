# AfriAgraria
## iconos
* https://www.flaticon.com/

### Making Animations in Angular Reusable

```
import {animate, animateChild, query, stagger, style, transition, trigger} from "@angular/animations";


export class Animations {
    public static fadeIn = trigger('fadeIn', [
        transition(':enter', [
            style({ opacity: '0', marginTop: '10px'}),
            animate('.2s ease-in', style({ opacity: '1', marginTop: '0px' })),
        ]),
    ]);
    public static stagger =  trigger('stagger', [
        transition(':enter', [
            query(':enter', stagger('.2s', [animateChild()]),{ optional: true })
        ])
    ])
}

//Using in Component File
//
//import {Animations} from "../../../../shared/animations/basic-animations";
//
//@Component({
//  selector: 'app-component',
//  providers: [],
//  templateUrl: './app.component.html',
//  animations: [
//      Animations.fadeIn,
//      Animations.stagger
//  ],
//})
```
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
