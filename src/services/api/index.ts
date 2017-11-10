import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

import axios from 'axios';

import * as utils from '../utils';
import { Event } from '../events/types';

declare const ga;

@Injectable()
export class ApiService {
    private credential: any = {};
    private baseURL: string = 'https://conectada-mockapi.herokuapp.com';
    private baseApiURL: string = `${this.baseURL}/api`;
    private baseAuthURL: string = `${this.baseURL}/auth`;
    private api;

    constructor(
        private alert: AlertController) {
        this.updateApi({});
    }

    private updateApi(headers) {
        this.api = axios.create({
            baseURL: this.baseApiURL,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                ...headers,
            },
        });
    }

    private checkRequest(result) {
        const { status, data } = result;
        if (status >= 200 && status < 300) {
            if (data) return data;
            return [];
        }
        utils.gaSend('request', 'check', 'error', status);
        utils.createAlert(this.alert, 'Solicitação', 'Ocorreu um erro com sua solicitação');
    }

    private setCredential(credential) {
        this.credential = credential;
        this.updateApi(credential);
    }

    public authenticate(headers): Promise<any> {
        return new Promise((resolve, reject) => {
            axios({
                url: this.baseAuthURL,
                method: 'GET',
                headers,
            })
            .then(result => {
                this.setCredential(headers);
                resolve(result.data);
            })
            .catch(error => {
                const { response } = error;
                resolve(false);
            });
        });
    }

    public createFacebookUser(headers): Promise<any> {
        return new Promise((resolve, reject) => {
            axios({
                url: this.baseAuthURL,
                method: 'POST',
                headers,
            })
            .then(result => {
                resolve(result.data);
            })
            .catch(error => {
                const { response } = error;
                resolve(false);
            });
        });
    }

    public getEvents(): Promise<any> {
        return this.api.get('/events')
            .then(result => this.checkRequest(result));
    }

    public getOpportunities(): Promise<any> {
        return this.api.get('/opportunities')
            .then(result => this.checkRequest(result));
    }
        
    public getProfile(): Promise<any> {
        return this.api.get('/students')
            .then(result => this.checkRequest(result));
    }

    public getHome(): Promise<any> {
        return this.api.get('/home')
            .then(result => this.checkRequest(result));
    }

    public getRestaurants(): Promise<any> {
        return this.api.get('/restaurants')
            .then(result => this.checkRequest(result));
    }
}
