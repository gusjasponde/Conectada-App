import moment from 'moment';
import { Injectable, Inject } from '@angular/core';

import { Api } from '../api'; 
import { Opportunity } from '../../interfaces/opportunity';
import { SentInterest } from '../../interfaces/sentInterest';

const responseSendInterest: SentInterest = {
    "id": 12346,
    "title": 'Interesse enviado',
    "description": 'Seu interesse nessa vaga foi enviado com sucesso!',
};

@Injectable()
export class Opportunities {
    opportunities?: Array<Opportunity>;
    lastUpdatedAt;

    constructor(
        @Inject(Api) private api: Api
    ) {}

    sendInterest(): Promise<SentInterest> {
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
