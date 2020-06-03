import { SALE_API } from './../generics/api';
import { Observable, throwError, of } from 'rxjs';
import { Cliente } from './../models/cliente.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class ClienteService{

  constructor(private httpClient: HttpClient) {}

   // Headers
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  //all clientes
  getClientes(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(`${SALE_API}/clientes`)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // get one cliente by id
  getClientById(id: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${SALE_API}/clientes` + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  //save cliente
  saveCliente(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(`${SALE_API}/clientes`,
      JSON.stringify(cliente), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  //update cliente
  updateCliente(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.put<Cliente>(`${SALE_API}/clientes` + '/' + cliente.id,
      JSON.stringify(cliente), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  //delete cliente
  deleteCliente(cliente: Cliente) {
    return this.httpClient.delete<Cliente>(`${SALE_API}/clientes` + '/' + cliente.id,
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
