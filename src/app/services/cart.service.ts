import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
//import { Products } from '../../assets/productos/products';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products: Product[] = [];
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>('');
  public totalPago = 0;
  totalItem$ = new Subject<number>();
  totalItem = 0;
  constructor(private http: HttpClient) {
    http.get('http://localhost:3000/productos').subscribe((data:any)=>{
      this.products=data.map((product: Product) => (product.cantidad = 0));
    })
   
    
  }
  get totalPagoCompra() {
    return this.totalPago;
  }
  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product: any) {
    this.totalItem = 0;
    const isProductInCart = this.cartItemList.find(
      (data: any) => data.codigo === product.codigo
    );
    //console.log('producto en carrito',isProductInCart)
    if (isProductInCart) {
      isProductInCart.cantidad += 1;
    } else {
      this.cartItemList.push({ ...product, cantidad: 1 });
    }
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    this.cartItemList.map((data: any) => {
      this.totalItem = data.cantidad + this.totalItem;
    });
    this.totalItem$.next(this.totalItem);
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.cantidad * a.precio;
    });
    return grandTotal;
  }
  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.codigo === a.codigo) {
        this.cartItemList.splice(index, 1);
        this.totalItem = this.totalItem - a.cantidad;
        this.totalItem$.next(this.totalItem);
      }
    });
    let producto = this.products.find((item) => item.codigo == product.codigo);
    producto!.cantidad = 0;

    this.productList.next(this.cartItemList);
  }
  removeAllCart() {
    this.products.map((a: any, index: any) => {
      a.cantidad = 0;
    });
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
    this.totalItem = 0;
    this.totalItem$.next(this.totalItem);
  }
  ventaRealizada(data1: any, data2: any) {
    let datos = {
      data1,
      data2,
    };
    return this.http.post('http://localhost:3000', datos);
  }
}
