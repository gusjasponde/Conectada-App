import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import moment from 'moment';

import { Event } from '../../services/events/types';
import { EventsService } from '../../services/events/events';

declare const google;

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class Events {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  mapOptions: {} = {};

  public page:string = 'parties';
  public parties: Array<Event> = [];
  public academics: Array<Event> = [];

  public showParties() {
    this.updateEvents()
      .then(() => {
        this.loadMap();
        this.parties.forEach(event => this.addEventMark(event, this.mapOptions));
      });
  }

  public showAcademics() {
    this.updateEvents()
      .then(() => {
        this.loadMap();
        this.academics.forEach(event => this.addEventMark(event, this.mapOptions));
      })
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private EventsService: EventsService) {
      this.configMap();
      this.updateEvents();
  }

  public updateEvents(): Promise<any> {
    return this.EventsService.getEvents()
      .then(events => {
        this.parties = events.filter(event =>
          event.eventType === 2);
        this.academics = events.filter(event =>
          event.eventType === 1);
      })
  }

  private configMap() {
    return this.EventsService.getInitialMapConfig()
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

  private addEventMark(event, mapOptions) {
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

  private ionViewDidLoad(){
    this.showParties();
  }

  private loadMap(){
    this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
  }
}
