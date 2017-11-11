import moment from 'moment';
import { Injectable, Inject } from '@angular/core';

import { Api } from '../api'; 
import { Profile } from '../../interfaces/profile';
import { Observable } from 'rxjs/Observable';

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
export class Profiles {
    constructor(
        @Inject(Api) private api: Api
    ) {}

    getProfile(): Observable<Profile> {
        return Observable.from(Promise.resolve(profile));
    }
}
