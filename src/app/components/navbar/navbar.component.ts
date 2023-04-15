import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
totalItem=0;
langs: string[] = [];
  constructor(private cartService:CartService,
    @Inject(DOCUMENT) public document: Document,
    private translate: TranslateService,
    public auth: AuthService
    ) { 
   
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
