import { IonicPage, NavParams, ViewController, ModalController } from 'ionic-angular';
import { Component } from '@angular/core';

import { ModalPage } from '../modal/modal';
import { Opportunity } from '../../interfaces/opportunity';
import { Opportunities } from '../../providers/opportunities/opportunities';

@IonicPage()
@Component({
  selector: 'page-opportunity-modal',
  templateUrl: 'opportunityModal.html',
})
export class OpportunityModalPage {
  opportunity: Opportunity;
  title: String;

  constructor (
    private viewCtrl: ViewController,
    private modalCtrl: ModalController,
    private opportunities: Opportunities,
    private params: NavParams) {
    this.opportunity = {
      id: params.get('id'),
      opportunityType: params.get('opportunityType'),
      title: params.get('title'),
      description: params.get('description'),
    };
    if (this.opportunity.opportunityType === 0) {
      this.title = 'Estágio';
    }
    if (this.opportunity.opportunityType === 1) {
      this.title = 'Pesquisa';
    }
  }

  sendInterest() {
    this.viewCtrl.dismiss();
    this.opportunities.sendInterest()
      .then(response => {
        const modal = this.modalCtrl.create(ModalPage, response);
        modal.present();
      });
  }

  dismiss() {
   this.viewCtrl.dismiss();
  }
}
