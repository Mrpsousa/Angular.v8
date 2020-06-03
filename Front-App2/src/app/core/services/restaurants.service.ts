import { MenuItem } from './../model/menu-item.model';
import { ErrorHandler } from './../app.error-handler';
import { Http } from '@angular/http';
import { MEAT_API } from './../app.api';
import { Restaurant } from './../model/restaurant.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class RestaurantsService{

  constructor(private http: Http){}

  restaurants(): Observable<Restaurant[]> {
   return this.http.get(`${MEAT_API}/restaurants`)
    .map(response => response.json())

  }

  restaurantById(id: string):  Observable<Restaurant>{
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handlerError)
  }

  reviewsOfRestaurant(id: string):  Observable<Restaurant>{
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandler.handlerError)
  }

  menuOfRestaurant(id: string):  Observable<MenuItem>{
    return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
      .map(response => response.json())
      .catch(ErrorHandler.handlerError)
  }

}
