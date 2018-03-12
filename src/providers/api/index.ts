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

    getReportTypes(): Observable<any> {
        return this.getEntriesFromDBName('types/reports');
    }

    getProfile(): Observable<any> {
        const profile = firebase.auth().currentUser;
        return Observable.from(Promise.resolve(profile))
            .map(firebaseUser => ({
                uid: firebaseUser.uid,
                name: firebaseUser.displayName,
                image: firebaseUser.photoURL,
                email: firebaseUser.email,
                phone: firebaseUser.phoneNumber,
            }));
    }

    submitReport(report) {
        const uid = firebase.auth().currentUser.uid;
        const reports = firebase.database().ref(`/v1/reports/${uid}`);
        reports.push(report);
        return Observable.fromEvent(reports, 'child_added');
    }

    submitInterest(interest) {
        const uid = firebase.auth().currentUser.uid;
        const interests = firebase.database().ref(`/v1/interests/${uid}`);
        interests.push(interest);
        return Observable.fromEvent(interests, 'child_added');
    }
}
