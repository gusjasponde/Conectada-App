import moment from 'moment';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, ElementRef, ViewChild } from '@angular/core';

import { Event } from '../../interfaces/event';
import { Events } from '../../providers/events/events';

declare const google;

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  mapOptions: {} = {};

  page:string = 'parties';
  parties: Array<Event> = [];
  academics: Array<Event> = [];

  showParties() {
    this.updateEvents()
      .then(() => {
        this.loadMap();
        this.parties.forEach(event => this.addEventMark(event, this.mapOptions));
      });
  }

  showAcademics() {
    this.updateEvents()
      .then(() => {
        this.loadMap();
        this.academics.forEach(event => this.addEventMark(event, this.mapOptions));
      })
  }

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private events: Events) {
      this.configMap();
      this.updateEvents();
  }

  updateEvents(): Promise<any> {
    return this.events.getEvents()
      .then(events => {
        this.parties = events.filter(event =>
          event.eventType === 2);
        this.academics = events.filter(event =>
          event.eventType === 1);
      })
  }

  configMap() {
    return this.events.getInitialMapConfig()
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

  addEventMark(event, mapOptions) {
    const { title, latitude, longitude, date } = event;
    const infoWindow = new google.maps.InfoWindow;
    const marker = new google.maps.Marker({
          position: new google.maps.LatLng(latitude, longitude),
          map: this.map, title,
    });
    const htmlTitle = `<b>${title} - ${moment(date).format('DD/MM')}</b>`;
    new google.maps.event.addListener(marker, 'click', () => {
        infoWindow.setContent(htmlTitle);
        infoWindow.open(this.map, marker);
    });
  }

  ionViewDidLoad(){
    this.showParties();
  }

  loadMap(){
    this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
  }
}
