import moment from 'moment';
import { AlertController } from 'ionic-angular';
import { Injectable, Inject } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Facebook } from '@ionic-native/facebook';

import { ApiProvider } from '../api'; 
import * as utils from '../utils';
import { userStatus } from '../../interfaces/userStatus';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthsProvider {
    constructor(
        private alert: AlertController,
        private facebook: Facebook,
        private storage: Storage,
        @Inject(ApiProvider) private apiProvider: ApiProvider
    ) {}

    createHeadersCredential(response) {
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

    checkLoginWithFacebook(response): boolean {
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

    loginWithFacebook(): Promise<userStatus | boolean> {
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

    authenticate(headers): Observable<any> {
        return this.apiProvider.authenticate(headers);
    }

    getUserStatusByAuth(auth): userStatus {
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

    getFacebookLoginStatus(): Promise<boolean> {
        return Promise.resolve(false);
        // return this.facebook.getLoginStatus()
        //     .then(result => this.checkLoginWithFacebook(result));
    }

    getLoginStatus(): Promise<any> {
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

    logout(): Promise<boolean> {
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
