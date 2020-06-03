import { Product } from './../models/product.model';
import { SALE_API } from './../generics/api';
import { Observable, throwError, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError  } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class ProductService{
  constructor(private httpClient: HttpClient) {}

   // Headers
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  //all products
  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${SALE_API}/produtos`)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // get one product by id
  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${SALE_API}/produtos` + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  //save product
  saveProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(`${SALE_API}/produtos`,
      JSON.stringify(product), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  //update product
  updateProduct(product: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${SALE_API}/produtos` + '/' + product.id,
      JSON.stringify(product), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  //delete product
  deleteProduct(product: Product) {
    return this.httpClient.delete<Product>(`${SALE_API}/produtos` + '/' + product.id,
     this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }


    // Manipulação de erros
    handleError(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Erro ocorreu no lado do client
        errorMessage = error.error.message;
      } else {
        // Erro ocorreu no lado do servidor
        errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    };

}
