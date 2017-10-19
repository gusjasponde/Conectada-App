import { Injectable, Inject } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { ApiService } from '../api'; 
import moment from 'moment';
import { Event, MapConfig } from './types';
import { mapConfig } from './mock';

import { Modal } from '../../components/modal/modal';

@Injectable()
export class EventsService {
    events?: Array<Event>;
    lastUpdatedAt;

    constructor(
        public modalCtrl: ModalController,
        @Inject(ApiService) private api: ApiService) {
    }

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
