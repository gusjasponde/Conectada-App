import moment from 'moment';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, ElementRef, ViewChild, OnDestroy } from '@angular/core';

import { Event } from '../../interfaces/event';
import { Events } from '../../providers/events/events';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MapConfig } from '../../interfaces/mapConfig';

declare const google;

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage implements OnDestroy {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  mapOptions: {} = {};

  page:string = 'parties';
  parties: Array<Event> = [];
  academics: Array<Event> = [];

  eventsSub: Subscription;
  mapConfigSub: Subscription;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private events: Events
  ) {}

  showParties() {
    this.refreshMap();
    this.parties.forEach(event => this.addEventMark(event, this.mapOptions));
  }

  showAcademics() {
    this.refreshMap();
    this.academics.forEach(event => this.addEventMark(event, this.mapOptions));
  }

  filterEventsByCategory(events: Array<Event>) {
    this.parties = events.filter(event =>
      event.eventType === 2);
    this.academics = events.filter(event =>
      event.eventType === 1);
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

  addEventMark(event: Event, mapOptions: {}) {
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

  refreshMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
  }

  ionViewDidLoad() {
    const eventsObservable = this.events.getEvents();
    const mapConfigObservable = this.events.getInitialMapConfig();
    this.eventsSub = eventsObservable
      .subscribe(events => (this.filterEventsByCategory(events)));
    this.mapConfigSub = mapConfigObservable
      .subscribe(mapConfig => (this.configMap(mapConfig)));
    Observable.concat(eventsObservable, mapConfigObservable)
      .subscribe(() => this.showParties());
  }

  ngOnDestroy() {
    this.eventsSub.unsubscribe();
    this.mapConfigSub.unsubscribe();
  }
}
