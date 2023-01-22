import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-anacardos-desc',
  templateUrl: './anacardos-desc.component.html',
  styleUrls: ['./anacardos-desc.component.css']
})
export class AnacardosDescComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit(): void {
  }
back(){
  this.location.back();
}
}
