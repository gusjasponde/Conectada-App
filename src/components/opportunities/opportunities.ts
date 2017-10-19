import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { Opportunity } from '../../services/opportunities/types';
import { OpportunityModal } from '../opportunityModal/opportunityModal';
import { OpportunitiesService } from '../../services/opportunities/opportunities';

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
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController,
    private OpportunitiesService: OpportunitiesService) {
  }

  public filterOpportunities($event) {
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

  private getOpportunities(): Promise<any> {
    return this.OpportunitiesService.getOpportunities()
      .then(opportunities => {
        this.rawOpportunities = opportunities;
        this.internships = this.rawOpportunities.filter(opportunity =>
          opportunity.opportunityType === 1);
        this.researchs = this.rawOpportunities.filter(opportunity =>
          opportunity.opportunityType === 2);
      });
  }
  
  private ionViewDidLoad(){
    this.getOpportunities();
  }

  private refresh($event) {
    this.getOpportunities()
      .then(() => $event.complete())
      .catch(() => $event.cancel());
  }
}
