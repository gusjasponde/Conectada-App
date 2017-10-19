import { Injectable, Inject } from '@angular/core';
import { ApiService } from '../api'; 

import moment from 'moment';

import { Restaurant, MapConfig } from './types';
import { mapConfig } from './mock';

@Injectable()
export class MealsService {
    restaurants?: Array<Restaurant>;
    lastUpdatedAt;

    constructor(
        @Inject(ApiService) private api: ApiService) {
    }

    getInitialMapConfig(): Promise<MapConfig> {
        return Promise.resolve(mapConfig);
    }

    getRestaurants(): Promise<Array<Restaurant>> {
        if (this.shouldRefresh()) {
            return this.refresh();
        }
        return Promise.resolve(this.restaurants);
    }

    refresh(): Promise<Array<Restaurant>> {
        // API Call
        return this.api.getRestaurants()
            .then(restaurants => {
                this.restaurants = restaurants;
                this.lastUpdatedAt = moment();
                return restaurants;
            })
            .catch(error => {
                // [todo] send error to GA
                this.lastUpdatedAt = moment();
            });
    } 

    shouldRefresh(): boolean {
        if (this.restaurants === undefined) return true;
        // 30 seconds
        const lastUpdateDiff = moment().diff(this.lastUpdatedAt);
        if (lastUpdateDiff > 30000) return true;
        return false;
    }
}
