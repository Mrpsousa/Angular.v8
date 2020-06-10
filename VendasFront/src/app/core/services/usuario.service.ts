import { SALE_API } from '../generics/api';
import { Observable, throwError, of } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class UsuarioService{

  constructor(private httpClient: HttpClient) {}

   // Headers
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  //all usuarios
  getUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(`${SALE_API}/usuario`)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // get one usuario by id
  getUsuarioById(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${SALE_API}/usuario` + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  //save usuario
  saveUsuario(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(`${SALE_API}/usuario`,
      JSON.stringify(usuario), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  //update usuario
  updateUsuario(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.put<Usuario>(`${SALE_API}/usuario` + '/' + usuario.id,
      JSON.stringify(usuario), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  //delete usuario
  deleteUsuario(usuario: Usuario) {
    return this.httpClient.delete<Usuario>(`${SALE_API}/usuario` + '/' + usuario.id,
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
