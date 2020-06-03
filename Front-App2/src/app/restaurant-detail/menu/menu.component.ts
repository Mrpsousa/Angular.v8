import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from './../../core/services/restaurants.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'app/core/model/menu-item.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu:MenuItem

  constructor(private restaurantsService: RestaurantsService,
              private route: ActivatedRoute) { }


  ngOnInit() {
      this.restaurantsService.menuOfRestaurant(this.route.parent.snapshot.params['id'])
    .subscribe(menu => this.menu = menu)
  }

}
