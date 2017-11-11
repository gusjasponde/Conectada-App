import moment from 'moment';
import { ModalController } from 'ionic-angular';
import { Injectable, Inject } from '@angular/core';

import { Api } from '../api'; 
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
export class Events {
    constructor(
        @Inject(Api) private api: Api
    ) {}

    getInitialMapConfig(): Observable<MapConfig> {
        return Observable.from(Promise.resolve(mapConfig));
    }

    getEvents(): Observable<Array<Event>> {
        return this.api.getEvents();
    }
}
