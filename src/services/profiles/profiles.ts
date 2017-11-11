import moment from 'moment';
import { Injectable, Inject } from '@angular/core';

import { ApiService } from '../api'; 
import { Profile } from '../../interfaces/profile';

const profile: Profile = {
    image: '',
    name: 'Matheus',
    username: 'matheus',
    university: 'Universidade Federal do Rio de Janeiro',
    description: 'Desenvolvedor de Software',
    email: 'matheusfreirerabelo@gmail.com',
    phone: '',
    gender: 'male'
};

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
