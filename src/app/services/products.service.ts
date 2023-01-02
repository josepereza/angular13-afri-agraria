import { Injectable } from '@angular/core';
import {Products} from '../../assets/productos/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getAll(){
    return Products
  }
}
