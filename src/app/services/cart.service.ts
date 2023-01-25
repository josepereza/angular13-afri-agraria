import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  public totalPago=0;
  totalItem$=new Subject<number>();
  totalItem=0;
  constructor() { }
  get totalPagoCompra(){
    return this.totalPago
  }
  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product : any){
    this.totalItem=0
    const isProductInCart = this.cartItemList.find((data:any) => data.codigo === product.codigo)
   
    if (isProductInCart) {
      isProductInCart.cantidad += isProductInCart.cantidad+product.cantidad;
    } else {
      this.cartItemList.push( product)
    }
this.productList.next(this.cartItemList);
    this.getTotalPrice();
this.cartItemList.map((data:any)=>{
  this.totalItem=data.cantidad+this.totalItem

})
this.totalItem$.next(this.totalItem)
    }


   
    
  
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.cantidad*a.precio;
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}
