import { Injectable, Inject } from '@angular/core';

import { ApiProvider } from '../api'; 
import { Event } from '../../interfaces/event';
import { MapConfig } from '../../interfaces/mapConfig';
import { Observable } from 'rxjs/Observable';

const mapConfig: MapConfig = {
    initialLatitude: -22.858926,
    initialLongitude: -43.2285518,
    zoom: 13,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false
};

@Injectable()
export class EventsProvider {
    constructor(
        @Inject(ApiProvider) private apiProvider: ApiProvider
    ) {}

    getInitialMapConfig(): Observable<MapConfig> {
        return Observable.from(Promise.resolve(mapConfig));
    }

    getEvents(): Observable<Array<Event>> {
        return this.apiProvider.getEvents();
    }
}
