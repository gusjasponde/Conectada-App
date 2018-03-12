import { Injectable, Inject } from '@angular/core';

import { ApiProvider } from '../api';
import { Profile } from '../../interfaces/profile';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProfilesProvider {
    constructor(
        @Inject(ApiProvider) private apiProvider: ApiProvider
    ) {}

    getProfile(): Observable<Profile> {
        return this.apiProvider.getProfile();
    }
}
