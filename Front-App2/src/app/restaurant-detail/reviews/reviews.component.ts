import { Restaurant } from './../../core/model/restaurant.model';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from './../../core/services/restaurants.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  restaurant: Restaurant;

  constructor(private restaurantsService: RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantsService.reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
    .subscribe(restaurant => this.restaurant = restaurant)
  }

}
