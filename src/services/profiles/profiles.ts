import { Injectable, Inject } from '@angular/core';
import { ApiService } from '../api'; 

import moment from 'moment';
import { Profile } from './types';
import { profile } from './mock';

@Injectable()
export class ProfilesService {
    profile: Profile;
    lastUpdatedAt;

    constructor(
        @Inject(ApiService) private api: ApiService) {
    }

    getProfile(): Promise<void | Profile> {
        if (this.shouldRefresh()) {
            return this.refresh();
        }
        return Promise.resolve(this.profile);
    }

    refresh(): Promise<void | Profile> {
        // API Call
        return Promise.resolve(profile)
            .then(profile => {
                this.profile = profile;
                this.lastUpdatedAt = moment();
                return profile;
            })
            .catch(error => {
                // [todo] send error to GA
                this.lastUpdatedAt = moment();
            });
    } 

    shouldRefresh(): boolean {
        if (this.profile === undefined) return true;
        // 30 seconds
        const lastUpdateDiff = moment().diff(this.lastUpdatedAt);
        if (lastUpdateDiff > 30000) return true;
        return false;
    }
}
