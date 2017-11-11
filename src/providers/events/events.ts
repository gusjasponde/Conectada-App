import moment from 'moment';
import { ModalController } from 'ionic-angular';
import { Injectable, Inject } from '@angular/core';

import { Api } from '../api'; 
import { Event } from '../../interfaces/event';
import { MapConfig } from '../../interfaces/mapConfig';
import { ModalPage } from '../../pages/modal/modal';

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
    events?: Array<Event>;
    lastUpdatedAt;

    constructor(
        public modalCtrl: ModalController,
        @Inject(Api) private api: Api
    ) {}

    getInitialMapConfig(): Promise<MapConfig> {
        return Promise.resolve(mapConfig);
    }

    getEvents(): Promise<Array<Event>> {
        if (this.shouldRefresh()) {
            return this.refresh();
        }
        return Promise.resolve(this.events);
    }

    refresh(): Promise<Array<Event>> {
        return this.api.getEvents()
            .then(events => {
                this.events = events;
                this.lastUpdatedAt = moment();
                return events;
            })
            .catch(error => {
                // [todo] send error to GA
                this.lastUpdatedAt = moment();
                return [];
            });
    } 

    shouldRefresh(): boolean {
        if (this.events === undefined) return true;
        // 30 seconds
        const lastUpdateDiff = moment().diff(this.lastUpdatedAt);
        if (lastUpdateDiff > 30000) return true;
        return false;
    }
}
