import * as R from 'ramda';
import { IonicPage } from 'ionic-angular';
import { Component, OnDestroy } from '@angular/core';

import { Event, EventType } from '../../interfaces/event';
import { EventsProvider } from '../../providers/events/events';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MapConfig } from '../../interfaces/mapConfig';
import { Marker, SelectedMarkEvent } from '../../interfaces/marker';

declare const google;

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage implements OnDestroy {
  page: String = 'parties';
  parties: Array<Event> = [];
  academics: Array<Event> = [];

  mapConfig: MapConfig = {};
  markers: Array<Marker> = [];

  eventsSub: Subscription;
  mapConfigSub: Subscription;

  constructor(
    private eventsProvider: EventsProvider
  ) {}

  showParties() {
    this.markers = this.parties;
  }

  showAcademics() {
    this.markers = this.academics;
  }

  filterEventsByCategory(events: Array<Event>) {
    const groupByType = R.groupBy(R.prop('eventType'));
    const groupedEvents = groupByType(events);
    this.parties = groupedEvents[EventType.party];
    this.academics = groupedEvents[EventType.academic];
  }

  handleSelectedMarker(selected: SelectedMarkEvent) {
    const { title, latitude, longitude } = selected.marker;
    const infoWindow = new google.maps.InfoWindow;
    const htmlTitle = `<b>${title}</b>`;
    infoWindow.setContent(htmlTitle);
    infoWindow.open(selected.map, selected.googleMarker);
  }

  ionViewDidLoad() {
    const eventsObservable = this.eventsProvider.getEvents();
    const mapConfigObservable = this.eventsProvider.getInitialMapConfig();
    this.eventsSub = eventsObservable
      .subscribe(events => (this.filterEventsByCategory(events)));
    this.mapConfigSub = mapConfigObservable
      .subscribe(mapConfig => (this.mapConfig = mapConfig));
    Observable.concat(eventsObservable, mapConfigObservable)
      .subscribe(() => this.showParties());
  }

  ngOnDestroy() {
    this.eventsSub.unsubscribe();
    this.mapConfigSub.unsubscribe();
  }
}
