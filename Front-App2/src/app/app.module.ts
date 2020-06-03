import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { RestaurantsService } from './core/services/restaurants.service';
import { HeaderComponent } from './layout/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {ROUTES} from './app.routes'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';


@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      HomeComponent,
      AboutComponent,
      RestaurantsComponent,
      RestaurantComponent,
      RestaurantDetailComponent,
      MenuComponent,
      ShoppingCartComponent,
      ReviewsComponent,
      MenuItemComponent
   ],
   imports: [
      BrowserModule,
      HttpModule,
      RouterModule.forRoot(ROUTES)
   ],
   providers: [
      RestaurantsService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
