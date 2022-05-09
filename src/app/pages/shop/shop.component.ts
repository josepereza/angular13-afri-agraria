import { Component, OnInit } from '@angular/core';
import {Animations} from "../../shared/animations/basic-animations";
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  animations: [
          Animations.fadeIn,
          Animations.stagger
      ],
})
export class ShopComponent implements OnInit {
cantidad:number=1;
  constructor() { }

  ngOnInit(): void {
  }

}
