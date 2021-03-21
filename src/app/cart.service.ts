import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items = [];

  constructor(private httpClient: HttpClient) { }

  addItem(item: any){
    this.items.push(item);
  }

  returnCartItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

  getShippingPrices(){
    return this.httpClient.get('/assets/shipping.json');
  }
}
