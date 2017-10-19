import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import moment from 'moment';

import { Modal } from '../modal/modal';
import { Restaurant } from '../../services/meals/types';
import { MealsService } from '../../services/meals/meals';

declare const google;

@IonicPage()
@Component({
  selector: 'page-meals',
  templateUrl: 'meals.html',
})
export class Meals {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  mapOptions: {} = {};

  public page:string = 'bandejoes';
  public bandejoes: Array<Restaurant> = [];
  public restaurants: Array<Restaurant> = [];

  public showBandejoes() {
    this.updateRestaurants()
      .then(() => {
        this.loadMap();
        this.bandejoes.forEach(restaurant => this.addRestaurantMark(restaurant, this.mapOptions));
      });
  }

  public showRestaurants() {
    this.updateRestaurants()
      .then(() => {
        this.loadMap();
        this.restaurants.forEach(restaurant => this.addRestaurantMark(restaurant, this.mapOptions));
      })
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private MealsService: MealsService) {
      this.configMap();
      this.updateRestaurants();
  }

  public updateRestaurants() {
    return this.MealsService.getRestaurants()
      .then(restaurants => {
        this.bandejoes = restaurants.filter(restaurant =>
          restaurant.restaurantType === 1);
        this.restaurants = restaurants.filter(restaurant =>
          restaurant.restaurantType === 2);
      })
  }

  private configMap() {
    return this.MealsService.getInitialMapConfig()
      .then(config => {
        const { initialLatitude, initialLongitude, zoom, mapTypeControl,
          scaleControl, streetViewControl, rotateControl } = config;
        const center = new google.maps.LatLng(initialLatitude, initialLongitude);
        this.mapOptions = {
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          center, zoom, mapTypeControl, scaleControl,
          streetViewControl, rotateControl
        }
      });
  }

  private addRestaurantMark(restaurant, mapOptions) {
    const { title, description, latitude, longitude } = restaurant;
    const infoWindow = new google.maps.InfoWindow;
    const marker = new google.maps.Marker({
          position: new google.maps.LatLng(latitude, longitude),
          map: this.map, title,
    });
    const htmlTitle = `<b>${title} - ${description}</b>`;
    new google.maps.event.addListener(marker, 'click', () => {
        this.selectRestaurant(restaurant);
        /*
        infoWindow.setContent(htmlTitle);
        infoWindow.open(this.map, marker);*/
    });
  }

  private selectRestaurant(restaurant) {
    const { title, description } = restaurant;
    const modal = this.modalCtrl.create(Modal, {
      title, description
    });
    modal.present();
  }

  private ionViewDidLoad(){
    this.showBandejoes();
  }

  private loadMap(){
    this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
  }
}
