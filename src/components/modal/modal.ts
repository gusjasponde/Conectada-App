import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class Modal {
  title: string = '';
  description: string = '';

  constructor (
    public viewCtrl: ViewController,
    public params: NavParams) {
    this.title = params.get('title');
    this.description = params.get('description');
  }

  dismiss() {
   this.viewCtrl.dismiss();
  }
}
