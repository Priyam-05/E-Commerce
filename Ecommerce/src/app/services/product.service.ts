import { IProduct, IRegister } from './../ecommerce';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  items = new Subject<number>();

  private base_url = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getElectronicsData(){
    return this.http.get<IProduct[]>(`${this.base_url}/electronics`);
  }

  getClothesData(){
    return this.http.get<IProduct[]>(`${this.base_url}/clothes`);
  }

  getBooksData(){
    return this.http.get<IProduct[]>(`${this.base_url}/books`);
  }

  postCartData(data: IProduct){
    return this.http.post<IProduct>(`${this.base_url}/cart`, data);
  }

  getCartData(){
    return this.http.get<IProduct[]>(`${this.base_url}/cart`);
  }

  deleteFromCart(id: number){
    return this.http.delete(`${this.base_url}/cart/${id}`);
  }

  postRegisterData(data: IRegister){
    return this.http.post<IRegister>(`${this.base_url}/login`, data);
  }

  getRegisterData(){
    return this.http.get<IRegister[]>(`${this.base_url}/login`);
  }

}
