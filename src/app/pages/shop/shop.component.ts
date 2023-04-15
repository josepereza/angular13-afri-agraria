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


constructor(public cartService:CartService, private productsService:ProductsService) { }

  ngOnInit(): void {
   this.products=this.productsService.getAll()
   this.products.map(prod=>
    prod.cantidad=0
   )
   console.log('shop', this.products)
   
  }
  addtocart(item: any){
       this.cartService.addtoCart(item);
  }
  
}
