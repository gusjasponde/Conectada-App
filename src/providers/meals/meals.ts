import moment from 'moment';
import { Injectable, Inject } from '@angular/core';

import { Api } from '../api'; 
import { Restaurant } from '../../interfaces/restaurant';
import { MapConfig } from '../../interfaces/mapConfig';
import { Observable } from 'rxjs/Observable';

const mapConfig: MapConfig = {
    initialLatitude: -22.858926,
    initialLongitude: -43.2285518,
    zoom: 14,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false
};

@Injectable()
export class Meals {
    constructor(
        @Inject(Api) private api: Api
    ) {}

    getInitialMapConfig(): Observable<MapConfig> {
        return Observable.from(Promise.resolve(mapConfig));
    }

    getRestaurants(): Observable<Array<Restaurant>> {
        return this.api.getRestaurants();
    }
}
