import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProductos } from './shared/interface/productos.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products';
  constructor(private httpClient: HttpClient) {}
  getProducts(): Observable<IProductos[]> {
    return this.httpClient.get<IProductos[]>(this.apiUrl);
  }
  postProduct(producto: IProductos): Observable<IProductos> {
    return this.httpClient.post<IProductos>(this.apiUrl, producto);
  }

  putProduct(producto: IProductos): Observable<IProductos> {
    const url = `${this.apiUrl}/${producto.id}`;
    return this.httpClient.put<IProductos>(url, producto);
  }
  deleteProduct(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.delete(url);
  }
}
