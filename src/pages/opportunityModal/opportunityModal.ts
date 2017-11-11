import { IonicPage, NavParams, ViewController, ModalController } from 'ionic-angular';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { ModalPage } from '../modal/modal';
import { Opportunity } from '../../interfaces/opportunity';
import { OpportunitiesProvider } from '../../providers/opportunities/opportunities';
import { Subscription } from 'rxjs/Subscription';

@IonicPage()
@Component({
  selector: 'page-opportunity-modal',
  templateUrl: 'opportunityModal.html',
})
export class OpportunityModalPage implements OnInit, OnDestroy {
  opportunity: Opportunity;
  title: String;

  sendInterestSub: Subscription;

  constructor (
    private viewCtrl: ViewController,
    private modalCtrl: ModalController,
    private opportunitiesProvider: OpportunitiesProvider,
    private params: NavParams
  ) {}

  sendInterest() {
    this.viewCtrl.dismiss();
    this.sendInterestSub = this.opportunitiesProvider.sendInterest()
      .subscribe(response => {
        const modal = this.modalCtrl.create(ModalPage, response);
        modal.present();
      });
  }

  setOpportunityTitleByType() {
    if (this.opportunity.opportunityType === 1) {
      this.title = 'Estágio';
    }
    if (this.opportunity.opportunityType === 2) {
      this.title = 'Pesquisa';
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ngOnInit() {
    this.opportunity = {
      id: this.params.get('id'),
      opportunityType: this.params.get('opportunityType'),
      title: this.params.get('title'),
      description: this.params.get('description'),
    };
    this.setOpportunityTitleByType();
  }

  ngOnDestroy() {
    if (this.sendInterestSub) {
      this.sendInterestSub.unsubscribe();
    }
  }
}
