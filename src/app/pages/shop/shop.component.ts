import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
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
products:Product[]=[]  
cantidad=0;
constructor(private cartService:CartService, private productsService:ProductsService) { }

  ngOnInit(): void {
   this.products=this.productsService.getAll()
   
  }
  addtocart(item: any){
       this.cartService.addtoCart(item);
  }
  
}
