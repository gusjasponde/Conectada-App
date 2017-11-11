import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage implements OnInit {
  title: string = '';
  description: string = '';

  constructor (
    private viewCtrl: ViewController,
    private params: NavParams
  ) {}

  ngOnInit() {
    this.title = this.params.get('title');
    this.description = this.params.get('description');
  }

  dismiss() {
   this.viewCtrl.dismiss();
  }
}
