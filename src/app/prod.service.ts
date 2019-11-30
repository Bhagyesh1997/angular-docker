import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdService {
  url = "http://192.168.1.223:9898/product"
  constructor(private http : HttpClient) { }

  getProducts()
  {
    return this.http.get(this.url);
  }
}
