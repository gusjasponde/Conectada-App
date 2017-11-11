import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class Modal {
  title: string = '';
  description: string = '';

  constructor (
    private viewCtrl: ViewController,
    private params: NavParams) {
    this.title = params.get('title');
    this.description = params.get('description');
  }

  dismiss() {
   this.viewCtrl.dismiss();
  }
}
