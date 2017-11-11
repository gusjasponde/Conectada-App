import { IonicPage, NavController, NavParams,
  ViewController, LoadingController, ModalController } from 'ionic-angular';
import { Component, OnDestroy } from '@angular/core';

import * as utils from '../utils';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
import { ModalPage } from '../modal/modal';
import { Profiles } from '../../providers/profiles/profiles';
import { Auths } from '../../providers/auths/auths';
import { Profile } from '../../interfaces/profile';
import { Subscription } from 'rxjs/Subscription';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnDestroy {
  user: Profile = {
    image: '',
    name: '',
    username: '',
    university: '',
    description: '',
    email: '',
    phone: '',
    gender: ''
  };
  
  profileSub: Subscription;

  constructor(
    private navParams: NavParams, 
    private viewCtrl: ViewController,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private nav: NavController,
    private auths: Auths,
    private profiles: Profiles
  ) {}

  saveProfile() {
    const modal = this.modalCtrl.create(ModalPage, {
      title: 'Configurações salvas',
      description: 'Seu perfil foi atualizado'
    });
    modal.present();
  }

  logout() {
    this.auths.logout()
      .then(() => {
        utils.setNavRoot(this.nav, LoginPage);
      });
  }

  ionViewDidLoad() {
    this.profileSub = this.profiles.getProfile()
      .subscribe(profile => (this.user = profile));
  }

  ngOnDestroy() {
    this.profileSub.unsubscribe();
  }
}
