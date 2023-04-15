import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import {Products} from '../../assets/productos/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get('http://localhost:3000/productos')
  }
}
