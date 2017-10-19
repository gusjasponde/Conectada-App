import { Injectable, Inject } from '@angular/core';
import { ApiService } from '../api'; 

import moment from 'moment';

import { Opportunity, ResponseSendInterest  } from './types';
import { responseSendInterest } from './mock';

@Injectable()
export class OpportunitiesService {
    opportunities?: Array<Opportunity>;
    lastUpdatedAt;

    constructor(
        @Inject(ApiService) private api: ApiService) {
    }

    sendInterest(): Promise<ResponseSendInterest> {
        return Promise.resolve(responseSendInterest);
    }

    getOpportunities(): Promise<Array<Opportunity>> {
        if (this.shouldRefresh()) {
            return this.refresh();
        }
        return Promise.resolve(this.opportunities);
    }

    refresh(): Promise<Array<Opportunity>> {
        return this.api.getOpportunities()
            .then(opportunities => {
                this.opportunities = opportunities;
                this.lastUpdatedAt = moment();
                return opportunities;
            })
            .catch(error => {
                // [todo] send error to GA
                this.lastUpdatedAt = moment();
            });
    } 

    shouldRefresh(): boolean {
        if (this.opportunities === undefined) return true;
        // 30 seconds
        const lastUpdateDiff = moment().diff(this.lastUpdatedAt);
        if (lastUpdateDiff > 30000) return true;
        return false;
    }
}
