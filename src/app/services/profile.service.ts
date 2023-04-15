import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  createClienteProfile(cliente:any){
return this.http.post('http://localhost:3000/clientes', cliente)
  }
}
