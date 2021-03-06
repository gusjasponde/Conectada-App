import { Injectable, Inject } from '@angular/core';

import { ApiProvider } from '../api'; 
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HomeProvider {
    constructor(
        @Inject(ApiProvider) private apiProvider: ApiProvider
    ) {}

    getFeeds(): Observable<any> {
        return this.apiProvider.getHome();
    }
}
