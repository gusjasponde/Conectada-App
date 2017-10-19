import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

declare const ga;

export function clearStorage(storage: Storage): void {
    storage.remove('status');
    storage.remove('loggedInWith');
    storage.remove('accessToken');
    storage.remove('userId');
    storage.remove('expiresIn');
    storage.remove('sessionKey');
    storage.remove('sig');
    storage.remove('date');
}

export function updateStorageFromFacebook(storage: Storage, response): void {
    if (!response.authResponse) response.authResponse = {};
    storage.set('status', response.status);
    storage.set('loggedInWith', 'facebook');
    storage.set('accessToken', response.authResponse.accessToken);
    storage.set('userId', response.authResponse.userID);
    storage.set('expiresIn', response.authResponse.expiresIn);
    storage.set('sessionKey', response.authResponse.session_key);
    storage.set('sig', response.authResponse.sig);
    storage.set('date', new Date().toString());
}

export function getStorageCredential(storage: Storage): Promise<any> {
    return Promise.all([
        storage.get('status'),
        storage.get('loggedInWith'),
        storage.get('accessToken'),
        storage.get('userId'),
        storage.get('expiresIn'),
        storage.get('sessionKey'),
        storage.get('sig'),
        storage.get('date'),
    ]).then(results => {
        const [ status, loggedInWith, accessToken, userId,
            expiresIn, sessionKey, sig, date ] = results;
        return { status, loggedInWith, accessToken, userId,
            expiresIn, sessionKey, sig, date };
    });
}

export function createAlert(
    alertCtrl: AlertController, title: string, subTitle: string) {
    const alert = alertCtrl.create({
        title, subTitle, buttons: ['OK']
    });
    alert.present();
}

export function gaSend(category: string, action: string, label: string, value: number | string) {
    ga('send', 'event', category, action, label, value);
}
