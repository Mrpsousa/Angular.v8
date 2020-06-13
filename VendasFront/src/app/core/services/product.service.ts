import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';


@Injectable({
  providedIn: 'root'
})

export class ProductService extends BaseService<Product>{
  path = this.path + "/produtos";
  constructor(httpClient: HttpClient, ){
    super(httpClient);
  }

}
