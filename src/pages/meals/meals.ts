import moment from 'moment';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Component, ElementRef, ViewChild, OnDestroy} from '@angular/core';

import { ModalPage } from '../modal/modal';
import { Restaurant } from '../../interfaces/restaurant';
import { MealsProvider } from '../../providers/meals/meals';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { MapConfig } from '../../interfaces/mapConfig';

declare const google;

@IonicPage()
@Component({
  selector: 'page-meals',
  templateUrl: 'meals.html',
})
export class MealsPage implements OnDestroy {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  mapOptions: {} = {};

  page:string = 'bandejoes';
  bandejoes: Array<Restaurant> = [];
  restaurants: Array<Restaurant> = [];

  restaurantsSub: Subscription;
  mapConfigSub: Subscription;

  showBandejoes() {
    this.refreshMap();
    this.bandejoes.forEach(restaurant => this.addRestaurantMark(restaurant, this.mapOptions));
  }

  showRestaurants() {
    this.refreshMap();
    this.restaurants.forEach(restaurant => this.addRestaurantMark(restaurant, this.mapOptions));
  }

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private modalCtrl: ModalController,
    private mealsProvider: MealsProvider
  ) {}

  filterRestaurantsByCategory(restaurants: Array<Restaurant>) {
    this.bandejoes = restaurants.filter(restaurant =>
      restaurant.restaurantType === 1);
    this.restaurants = restaurants.filter(restaurant =>
      restaurant.restaurantType === 2);
  }

  configMap(mapConfig: MapConfig) {
    const { initialLatitude, initialLongitude, zoom, mapTypeControl,
      scaleControl, streetViewControl, rotateControl } = mapConfig;
    const center = new google.maps.LatLng(initialLatitude, initialLongitude);
    this.mapOptions = {
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center, zoom, mapTypeControl, scaleControl,
      streetViewControl, rotateControl
    }
  }

  addRestaurantMark(restaurant: Restaurant, mapOptions: {}) {
    const { title, description, latitude, longitude } = restaurant;
    const infoWindow = new google.maps.InfoWindow;
    const marker = new google.maps.Marker({
          position: new google.maps.LatLng(latitude, longitude),
          map: this.map, title,
    });
    const htmlTitle = `<b>${title} - ${description}</b>`;
    new google.maps.event.addListener(marker, 'click', () => {
        this.selectRestaurant(restaurant);
    });
  }

  selectRestaurant(restaurant: Restaurant) {
    const { title, description } = restaurant;
    const modal = this.modalCtrl.create(ModalPage, {
      title, description
    });
    modal.present();
  }

  refreshMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
  }

  ionViewDidLoad() {
    const restaurantsObservable = this.mealsProvider.getRestaurants();
    const mapConfigObservable = this.mealsProvider.getInitialMapConfig();
    this.restaurantsSub = restaurantsObservable
      .subscribe(events => (this.filterRestaurantsByCategory(events)));
    this.mapConfigSub = mapConfigObservable
      .subscribe(mapConfig => (this.configMap(mapConfig)));
    Observable.concat(restaurantsObservable, mapConfigObservable)
      .subscribe(() => this.showBandejoes());
  }

  ngOnDestroy() {
    this.restaurantsSub.unsubscribe();
    this.mapConfigSub.unsubscribe();
  }
}
