import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products = [
    { id: "P-101", name: 'Logitech Mouse', description: '6 Button Mechanical  Mouse.', price: 899 },
    { id: "P-102", name: 'JBL BT Speaker', description: 'Waterproof Radio 360 Surround.', price: 1099 },
    { id: "P-103", name: 'Mechanical Keyboard', description: 'Hot-Swappable RGB Backlit.', price: 2395 },
    { id: "P-104", name: 'Oculus Meta', description: 'All-i-one Gaming Headset.', price: 22450 },
    { id: "P-105", name: 'Jimwell Calma', description: 'Tall Dark and Handsome!!!!.', price: 1000000 }
  ];

  getProducts() {
    return this.products;
  }
}