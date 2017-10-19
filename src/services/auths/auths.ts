import { Injectable, Inject } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Facebook } from '@ionic-native/facebook';
import { ApiService } from '../api'; 

import * as utils from '../utils';
import { userStatus } from './types';
import { AlertController } from 'ionic-angular';
import moment from 'moment';

@Injectable()
export class AuthsService {
    constructor(
        private alert: AlertController,
        private facebook: Facebook,
        private storage: Storage,
        @Inject(ApiService) private api: ApiService) {
    }

    private createHeadersCredential(response) {
        if (!response.authResponse) response.authResponse = {};
        return {
            status: response.status,
            accessToken: response.authResponse.accessToken,
            userId: response.authResponse.userID,
            expiresIn: response.authResponse.expiresIn,
            sessionKey: response.authResponse.session_key,
            sig: response.authResponse.sig,
        }
    }

    private checkLoginWithFacebook(response): boolean {
        utils.updateStorageFromFacebook(this.storage, response)
        if (response.status === 'connected') {
            // the user has successfully logged in
            return true;
        } else if (response.status === 'not_authorized') {
            // the user has not authenticated Conectada
            return false;
        }
        // the user isn't logged in
        return false;
    }

    public test(): Promise<boolean> {
        return Promise.resolve(true);
    }

    public loginWithFacebook(): Promise<userStatus | boolean> {
        return this.facebook
            .login(['public_profile', 'user_friends', 'email'])
            .then(result => {
                if (!this.checkLoginWithFacebook(result)) {
                    throw new Error('Unathorized');
                }
                return result;
            })
            .then(data => this.createHeadersCredential(data))
            .then(headers => this.authenticate(headers))
            .then(auth => this.getUserStatusByAuth(auth))
            .catch(error => {
                utils.createAlert(this.alert, 'Oops!', 'Não foi possível entrar com o Facebook');
                return false;
            });
    }

    public authenticate(headers): Promise<any> {
        return this.api.authenticate(headers);
    }

    public getUserStatusByAuth(auth): userStatus {
        utils.createAlert(this.alert, '[a]', JSON.stringify(auth));
        if (!auth) userStatus.failed;
        const { success, facebookUserId, conectadaId } = auth;
        if (facebookUserId === null && conectadaId  === null) {
            return userStatus.invite;
        }
        if (facebookUserId !== null && conectadaId === null) {
            return userStatus.inviteSent;
        }
        if (facebookUserId !== null && conectadaId !== null) {
            return userStatus.authorized;
        }
        return userStatus.failed;
    }

    private getFacebookLoginStatus(): Promise<boolean> {
        return Promise.resolve(false);
        // return this.facebook.getLoginStatus()
        //     .then(result => this.checkLoginWithFacebook(result));
    }

    public getLoginStatus(): Promise<any> {
        return Promise.resolve(false);
        // return utils
        //     .getStorageCredential(this.storage)
        //     .then(credential => {
        //         const { loggedInWith, status } = credential;
        //         if (loggedInWith === 'facebook'
        //             && status === 'connected') {
        //             return true;
        //         }
        //         return false;
        //     })
        //     .catch(error => {
        //         // send error to GA
        //     });
    }

    public logout(): Promise<boolean> {
        return Promise.resolve()
            .then(() => {
                utils.clearStorage(this.storage);
                return true;
            })
            .catch(error => {
                utils.gaSend('login', 'logout', 'execution', error.message);
                return false;
            });
    }
}
