import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'https://dummyjson.com/products';
  // private apiUrl = 'http://localhost:8080/api/v1/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
