import { NavController, NavParams, ModalController, IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';

import { Opportunity } from '../../interfaces/opportunity';
import { OpportunityModal } from '../opportunityModal/opportunityModal';
import { OpportunitiesService } from '../../services/opportunities/opportunities';

@IonicPage()
@Component({
  selector: 'page-opportunities',
  templateUrl: 'opportunities.html',
})
export class Opportunities {
  rawOpportunities: Array<Opportunity> = [];
  internships: Array<Opportunity> = [];
  researchs: Array<Opportunity> = [];

  selectOpportunity(opportunity) {
    const modal = this.modalCtrl.create(OpportunityModal, opportunity);
    modal.present();
  }

  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams, 
    private modalCtrl: ModalController,
    private OpportunitiesService: OpportunitiesService
  ) {}

  filterOpportunities($event) {
    const search = $event.target.value.toLowerCase();
    this.internships = this.rawOpportunities.filter(opportunity => {
      const term = opportunity.title.toLowerCase();
      return opportunity.opportunityType === 1 && term.search(search) >= 0;
    });
    this.researchs = this.rawOpportunities.filter(opportunity => {
      const term = opportunity.title.toLowerCase();
      return opportunity.opportunityType === 2 && term.search(search) >= 0;
    });
  }

  getOpportunities(): Promise<any> {
    return this.OpportunitiesService.getOpportunities()
      .then(opportunities => {
        this.rawOpportunities = opportunities;
        this.internships = this.rawOpportunities.filter(opportunity =>
          opportunity.opportunityType === 1);
        this.researchs = this.rawOpportunities.filter(opportunity =>
          opportunity.opportunityType === 2);
      });
  }

  ionViewDidLoad(){
    this.getOpportunities();
  }

  refresh($event) {
    this.getOpportunities()
      .then(() => $event.complete())
      .catch(() => $event.cancel());
  }
}
