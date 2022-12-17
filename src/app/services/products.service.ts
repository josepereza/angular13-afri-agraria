import { Injectable } from '@angular/core';
import {Products} from '../../products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getAll(){
    return Products
  }
}
