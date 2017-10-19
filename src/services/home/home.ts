import { Injectable, Inject } from '@angular/core';
import { ApiService } from '../api'; 

import moment from 'moment';

import { feeds } from './mock';
import { Feed } from './types';

@Injectable()
export class HomeService {
    feeds?: Array<Feed>;
    lastUpdatedAt;

    constructor(
        @Inject(ApiService) private api: ApiService) {
    }

    getFeeds(): Promise<any> {
        if (this.shouldRefresh()) {
            return this.refresh();
        }
        return Promise.resolve(this.feeds);
    }

    refresh(): Promise<any> {
        // API Call
        return this.api.getHome()
            .then(feeds => {
                this.feeds = feeds;
                this.lastUpdatedAt = moment();
                return feeds;
            })
            .catch(error => {
                // [todo] send error to GA
                this.lastUpdatedAt = moment();
            });
    }

    shouldRefresh(): boolean {
        if (this.feeds === undefined) return true;
        // 30 seconds
        const lastUpdateDiff = moment().diff(this.lastUpdatedAt);
        if (lastUpdateDiff > 30000) return true;
        return false;
    }
}
