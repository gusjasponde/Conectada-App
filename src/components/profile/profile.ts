import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ModalController } from 'ionic-angular';

import * as utils from '../utils';
import { TabsPage } from '../tabs/tabs';
import { Login } from '../login/login';
import { Modal } from '../modal/modal';
import * as types from '../../services/profiles/types';
import { ProfilesService } from '../../services/profiles/profiles';
import { AuthsService } from '../../services/auths/auths';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class Profile {
  public user: void | types.Profile = {
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
    public navParams: NavParams, 
    public viewCtrl: ViewController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    private nav: NavController,
    private AuthsService: AuthsService,
    private ProfilesService: ProfilesService) {
  }
  
  private getProfile() {
    return this.ProfilesService.getProfile()
      .then(profile => {
        this.user = profile;
      });
  }

  private saveProfile() {
    const modal = this.modalCtrl.create(Modal, {
      title: 'Configurações salvas',
      description: 'Seu perfil foi atualizado'
    });
    modal.present();
  }

  private ionViewDidLoad() {
    this.getProfile();
  }

  private logout() {
    this.AuthsService.logout()
      .then(() => {
        utils.setNavRoot(this.nav, Login);
      });
  }
}
