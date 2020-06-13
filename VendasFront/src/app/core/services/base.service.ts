import { Product } from '../models/product.model';
import { SALE_API } from '../generics/api';
import { Observable, throwError, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError, tap  } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class BaseService<M> {

protected path = SALE_API;

constructor(protected httpClient: HttpClient) {}

// Headers
httpOptions = {
 headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

//all products
getAll(): Observable<M[]> {
 return this.httpClient.get<M[]>(this.path)
   .pipe(
     retry(2),
     catchError(this.handleError))
}

// get one product by id
getById(id: number): Observable<M> {
 return this.httpClient.get<M>(`${this.path}/${id}`)
   .pipe(
     retry(2),
     catchError(this.handleError)
   )
}

//save
save(model: M): Observable<M> {
 return this.httpClient.post<M>(this.path,
 model)
   .pipe(
     retry(2),
     catchError(this.handleError)
   )
}

//update
update(model: M, id: number): Observable<M> {
 return this.httpClient.put<M>(`${this.path}/${id}`,
   JSON.stringify(model), this.httpOptions)
   .pipe(
     retry(1),
     catchError(this.handleError)
   )
}

//delete 
delete(id: number) {
 return this.httpClient.delete<M>(`${this.path}/${id}`,
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
