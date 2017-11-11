import moment from 'moment';
import { Injectable, Inject } from '@angular/core';

import { Api } from '../api'; 
import { Opportunity } from '../../interfaces/opportunity';
import { SentInterest } from '../../interfaces/sentInterest';
import { Observable } from 'rxjs/Observable';

const sendInterestResponse: SentInterest = {
    "id": 12346,
    "title": 'Interesse enviado',
    "description": 'Seu interesse nessa vaga foi enviado com sucesso!',
};

@Injectable()
export class Opportunities {
    constructor(
        @Inject(Api) private api: Api
    ) {}

    sendInterest(): Observable<SentInterest> {
        return Observable.from(Promise.resolve(sendInterestResponse));
    }

    getOpportunities(): Observable<Array<Opportunity>> {
        return this.api.getOpportunities();
    }
}
