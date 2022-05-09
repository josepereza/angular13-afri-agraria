import { Component, OnInit } from '@angular/core';
import {Animations} from "../../shared/animations/basic-animations";

@Component({
  selector: 'app-iconos',
  templateUrl: './iconos.component.html',
  styleUrls: ['./iconos.component.css'],
  animations: [
    Animations.fadeInOut,
    Animations.stagger
],
})
export class IconosComponent implements OnInit {
  isOpen: boolean = false;
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
