import firebase from 'firebase';
import { Injectable } from '@angular/core';

import { UserStatus } from '../../interfaces/userStatus';

@Injectable()
export class AuthsProvider {
    userStatus = UserStatus.loggedOut;

    constructor() {
        // this is not private
        const config = {
            apiKey: "AIzaSyD0HEmK2wQ9K0HVm7_zJs0ShkT0SlcBBA0",
            authDomain: "conectada-app.firebaseapp.com",
            databaseURL: "https://conectada-app.firebaseio.com",
            projectId: "conectada-app",
            storageBucket: "conectada-app.appspot.com",
            messagingSenderId: "800737561462"
          };
        firebase.initializeApp(config);

        this.updateUserStatus();
    }

    updateUserStatus() {
        if (firebase.auth().currentUser) {
            this.userStatus = UserStatus.authorized;
        } else {
            this.userStatus = UserStatus.loggedOut;
        }
    }

    getLoginStatus(): Promise<UserStatus> {
        return Promise.resolve(this.userStatus);
    }

    login(): Promise<UserStatus> {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(googleProvider)
            .then(() => UserStatus.authorized)
            .catch(() => UserStatus.loggedOut);
    }

    logout(): Promise<UserStatus> {
        return firebase.auth().signOut()
            .then(() => UserStatus.loggedOut)
            .catch(() => UserStatus.failed);
    }
}
