import axios from 'axios';
import { Observable } from 'rxjs';
import { AlertController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import * as utils from '../utils';
import { Event } from '../../interfaces/event';

declare const ga;

@Injectable()
export class ApiProvider {
    credential: any = {};
    baseURL: string = 'http://localhost:8080';
    baseApiURL: string = `${this.baseURL}/api`;
    baseAuthURL: string = `${this.baseURL}/auth`;
    api;

    constructor(
        private alert: AlertController) {
        this.updateApi({});
    }

    updateApi(headers) {
        this.api = axios.create({
            baseURL: this.baseApiURL,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                ...headers,
            },
        });
    }

    checkRequest(result) {
        const { status, data } = result;
        if (status >= 200 && status < 300) {
            if (data) return data;
            return [];
        }
        utils.gaSend('request', 'check', 'error', status);
        utils.createAlert(this.alert, 'Solicitação', 'Ocorreu um erro com sua solicitação');
    }

    setCredential(credential) {
        this.credential = credential;
        this.updateApi(credential);
    }

    authenticate(headers): Observable<any> {
        return Observable
            .from(axios({
                url: this.baseAuthURL,
                method: 'GET',
                headers,
            }))
            .map(result => {
                this.setCredential(headers);
                return result.data;
            });
    }

    createFacebookUser(headers): Observable<any> {
        return Observable
            .from(axios({
                url: this.baseAuthURL,
                method: 'POST',
                headers,
            }))
            .map(result => result.data);
    }

    getEvents(): Observable<any> {
        return Observable.from(this.api.get('/events'))
            .map(result => this.checkRequest(result));
    }

    getOpportunities(): Observable<any> {
        return Observable.from(this.api.get('/opportunities'))
            .map(result => this.checkRequest(result));
    }

    getHome(): Observable<any> {
        return Observable.from(this.api.get('/home'))
            .map(result => this.checkRequest(result));
    }

    getRestaurants(): Observable<any> {
        return Observable.from(this.api.get('/restaurants'))
            .map(result => this.checkRequest(result));
    }
}
