import firebase from 'firebase';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {
    constructor() {}

    mapDBSnapshot(result: {val:()=>{}}) {
        const value = result.val();
        return Object.keys(value).map(key => {
            const entry = value[key];
            entry.id = key;
            return entry;
        });
    }

    getEntriesFromDBName(databaseName: string) {
        const database = firebase.database().ref(`/v1/${databaseName}`);

        return Observable.fromEvent(database, 'value')
            .map(this.mapDBSnapshot);
    }

    getEvents(): Observable<any> {
        return this.getEntriesFromDBName('events');
    }

    getOpportunities(): Observable<any> {
        return this.getEntriesFromDBName('opportunities');
    }

    getHome(): Observable<any> {
        return this.getEntriesFromDBName('home');
    }

    getRestaurants(): Observable<any> {
        return this.getEntriesFromDBName('restaurants');
    }
}
