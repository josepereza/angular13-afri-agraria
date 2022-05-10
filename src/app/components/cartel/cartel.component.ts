import { Component, OnInit } from '@angular/core';
import {Animations} from "../../shared/animations/basic-animations";

@Component({
  selector: 'app-cartel',
  templateUrl: './cartel.component.html',
  styleUrls: ['./cartel.component.css'],
  animations: [
    Animations.izquierdaScroll
   
],
})
export class CartelComponent implements OnInit {
  isOpen: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  activate() {
    this.isOpen = true
   
  }
  desactivate() {
    this.isOpen = false
   
  }
}
