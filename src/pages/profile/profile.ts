import { IonicPage, NavController, NavParams,
  ViewController, LoadingController, ModalController } from 'ionic-angular';
import { Component } from '@angular/core';

import * as utils from '../utils';
import { TabsPage } from '../tabs/tabs';
import { Login } from '../login/login';
import { Modal } from '../modal/modal';
import { ProfilesService } from '../../services/profiles/profiles';
import { AuthsService } from '../../services/auths/auths';
import * as types from '../../interfaces/profile';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class Profile {
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
    private AuthsService: AuthsService,
    private ProfilesService: ProfilesService
  ) {}
  
  getProfile() {
    return this.ProfilesService.getProfile()
      .then(profile => {
        this.user = profile;
      });
  }

  saveProfile() {
    const modal = this.modalCtrl.create(Modal, {
      title: 'Configurações salvas',
      description: 'Seu perfil foi atualizado'
    });
    modal.present();
  }

  ionViewDidLoad() {
    this.getProfile();
  }

  logout() {
    this.AuthsService.logout()
      .then(() => {
        utils.setNavRoot(this.nav, Login);
      });
  }
}
