import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
totalItem=0;
langs: string[] = [];
  constructor(private cartService:CartService,private translate: TranslateService) { 
   
    this.langs = translate.getLangs();
  }

  ngOnInit(): void {
this.cartService.totalItem$.subscribe(data=>{
  this.totalItem=data;
})
   
  }
  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
