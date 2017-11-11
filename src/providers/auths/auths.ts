import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { UserStatus } from '../../interfaces/userStatus';

@Injectable()
export class AuthsProvider {
    constructor() {}

    getLoginStatus(): Promise<UserStatus> {
        return Promise.resolve(UserStatus.authorized);
    }

    login(): Promise<UserStatus> {
        return Promise.resolve(UserStatus.authorized);
    }

    logout(): Promise<UserStatus> {
        return Promise.resolve(UserStatus.loggedOut);
    }
}
