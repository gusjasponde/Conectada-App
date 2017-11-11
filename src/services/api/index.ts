import axios from 'axios';
import { AlertController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import * as utils from '../utils';
import { Event } from '../../interfaces/event';

declare const ga;

@Injectable()
export class ApiService {
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

    authenticate(headers): Promise<any> {
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

    createFacebookUser(headers): Promise<any> {
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

    getEvents(): Promise<any> {
        return this.api.get('/events')
            .then(result => this.checkRequest(result));
    }

    getOpportunities(): Promise<any> {
        return this.api.get('/opportunities')
            .then(result => this.checkRequest(result));
    }
        
    getProfile(): Promise<any> {
        return this.api.get('/students')
            .then(result => this.checkRequest(result));
    }

    getHome(): Promise<any> {
        return this.api.get('/home')
            .then(result => this.checkRequest(result));
    }

    getRestaurants(): Promise<any> {
        return this.api.get('/restaurants')
            .then(result => this.checkRequest(result));
    }
}
