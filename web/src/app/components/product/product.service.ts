import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products";

  constructor(private http: HttpClient) { }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }
}