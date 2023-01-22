import { Component, OnInit } from '@angular/core';
import  {Location} from '@angular/common'
@Component({
  selector: 'app-baobabDesc',
  templateUrl: './baobab-desc.component.html',
  styleUrls: ['./baobab-desc.component.css']
})
export class BaobabDescComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit(): void {
  }
  regresar(){
    this.location.back();
  }

}
