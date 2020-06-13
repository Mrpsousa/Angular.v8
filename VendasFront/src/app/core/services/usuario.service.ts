
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Usuario } from '../models/usuario.model';


@Injectable({
  providedIn: 'root'
})

export class UsuarioService extends BaseService<Usuario>{
  path = this.path + "/usuario";
  constructor(httpClient: HttpClient, ){
    super(httpClient);
  }

}
