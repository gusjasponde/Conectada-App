import { NavController, NavParams, ModalController, IonicPage } from 'ionic-angular';
import { Component, OnDestroy } from '@angular/core';

import { Opportunity } from '../../interfaces/opportunity';
import { OpportunityModalPage } from '../opportunityModal/opportunityModal';
import { Opportunities } from '../../providers/opportunities/opportunities';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@IonicPage()
@Component({
  selector: 'page-opportunities',
  templateUrl: 'opportunities.html',
})
export class OpportunitiesPage implements OnDestroy {
  rawOpportunities: Array<Opportunity> = [];
  internships: Array<Opportunity> = [];
  researchs: Array<Opportunity> = [];

  opportunitiesSub: Subscription;

  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams, 
    private modalCtrl: ModalController,
    private opportunities: Opportunities
  ) {}

  selectOpportunity(opportunity) {
    const modal = this.modalCtrl.create(OpportunityModalPage, opportunity);
    modal.present();
  }

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

  mapOpportunitiesByType(opportunities) {
    this.rawOpportunities = opportunities;
    this.internships = this.rawOpportunities.filter(opportunity =>
      opportunity.opportunityType === 1);
    this.researchs = this.rawOpportunities.filter(opportunity =>
      opportunity.opportunityType === 2);
  }

  refresh($event) {
    this.opportunitiesSub = this.opportunities.getOpportunities()
      .subscribe(opportunities => {
        this.mapOpportunitiesByType(opportunities);
        $event.complete();
      }, () => $event.cancel());
  }

  ionViewDidLoad(){
    this.opportunitiesSub = this.opportunities.getOpportunities()
      .subscribe(opportunities => (this.mapOpportunitiesByType(opportunities)));
  }

  ngOnDestroy() {
    this.opportunitiesSub.unsubscribe();
  }
}
