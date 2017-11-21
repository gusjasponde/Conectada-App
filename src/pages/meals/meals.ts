import * as R from 'ramda';
import { IonicPage, ModalController } from 'ionic-angular';
import { Component, OnDestroy} from '@angular/core';

import { ModalPage } from '../modal/modal';
import { Restaurant, RestaurantType } from '../../interfaces/restaurant';
import { MealsProvider } from '../../providers/meals/meals';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Marker, SelectedMarkEvent } from '../../interfaces/marker';
import { MapConfig } from '../../interfaces/mapConfig';

@IonicPage()
@Component({
  selector: 'page-meals',
  templateUrl: 'meals.html',
})
export class MealsPage implements OnDestroy {
  page: String = 'restaurantes';
  bandejoes: Array<Restaurant> = [];
  restaurants: Array<Restaurant> = [];

  mapConfig: MapConfig = {};
  markers: Array<Marker> = [];

  restaurantsSub: Subscription;
  mapConfigSub: Subscription;

  showBandejoes() {
    this.markers = this.bandejoes;
  }

  showRestaurants() {
    this.markers = this.restaurants;
  }

  constructor(
    private modalCtrl: ModalController,
    private mealsProvider: MealsProvider
  ) {}

  filterRestaurantsByCategory(restaurants: Array<Restaurant>) {
    const groupByType = R.groupBy(R.prop('restaurantType'));
    const groupedRestaurants = groupByType(restaurants);
    this.bandejoes = groupedRestaurants[RestaurantType.bandejao];
    this.restaurants = groupedRestaurants[RestaurantType.restaurant];
  }

  handleSelectedMarker(selected: SelectedMarkEvent) {
    const { title, description } = selected.marker;
    const modal = this.modalCtrl.create(ModalPage, {
      title, description
    });
    modal.present();
  }

  ionViewDidLoad() {
    const restaurantsObservable = this.mealsProvider.getRestaurants();
    const mapConfigObservable = this.mealsProvider.getInitialMapConfig();
    this.restaurantsSub = restaurantsObservable
      .subscribe(events => (this.filterRestaurantsByCategory(events)));
    this.mapConfigSub = mapConfigObservable
      .subscribe(mapConfig => (this.mapConfig = mapConfig));
    Observable.concat(restaurantsObservable, mapConfigObservable)
      .subscribe(() => this.showBandejoes());
  }

  ngOnDestroy() {
    this.restaurantsSub.unsubscribe();
    this.mapConfigSub.unsubscribe();
  }
}
