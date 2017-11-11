import { IonicPage, NavController, NavParams,
  ViewController, LoadingController, ModalController } from 'ionic-angular';
import { Component } from '@angular/core';

import * as utils from '../utils';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
import { ModalPage } from '../modal/modal';
import { Profiles } from '../../providers/profiles/profiles';
import { Auths } from '../../providers/auths/auths';
import * as types from '../../interfaces/profile';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  user: void | types.Profile = {
    image: '',
    name: '',
    username: '',
    university: '',
    description: '',
    email: '',
    phone: '',
    gender: ''
  };

  constructor(
    private navParams: NavParams, 
    private viewCtrl: ViewController,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private nav: NavController,
    private auths: Auths,
    private profiles: Profiles
  ) {}
  
  getProfile() {
    return this.profiles.getProfile()
      .then(profile => {
        this.user = profile;
      });
  }

  saveProfile() {
    const modal = this.modalCtrl.create(ModalPage, {
      title: 'Configurações salvas',
      description: 'Seu perfil foi atualizado'
    });
    modal.present();
  }

  ionViewDidLoad() {
    this.getProfile();
  }

  logout() {
    this.auths.logout()
      .then(() => {
        utils.setNavRoot(this.nav, LoginPage);
      });
  }
}
