import * as R from 'ramda';
import { ModalController, IonicPage } from 'ionic-angular';
import { Component, OnDestroy } from '@angular/core';

import { Opportunity, OpportunityType } from '../../interfaces/opportunity';
import { OpportunityModalPage } from '../opportunityModal/opportunityModal';
import { OpportunitiesProvider } from '../../providers/opportunities/opportunities';
import { Subscription } from 'rxjs/Subscription';

@IonicPage()
@Component({
  selector: 'page-opportunities',
  templateUrl: 'opportunities.html',
})
export class OpportunitiesPage implements OnDestroy {
  groupedOpportunities: Array<any> = [];
  internships: Array<Opportunity> = [];
  researchs: Array<Opportunity> = [];

  opportunitiesSub: Subscription;

  constructor(
    private modalCtrl: ModalController,
    private opportunitiesProvider: OpportunitiesProvider
  ) {}

  selectOpportunity(opportunity) {
    const modal = this.modalCtrl.create(OpportunityModalPage, opportunity);
    modal.present();
  }

  filterOpportunities($event) {
    const search = $event.target.value.toLowerCase();
    const filterOpportunityByTerm = (opportunity) => {
      const term = opportunity.title.toLowerCase();
      return term.search(search) >= 0;
    };
    this.internships = this.groupedOpportunities[OpportunityType.internship]
      .filter(filterOpportunityByTerm);
    this.researchs = this.groupedOpportunities[OpportunityType.research]
      .filter(filterOpportunityByTerm);
  }

  mapOpportunitiesByType(opportunities) {
    const groupByType = R.groupBy(R.prop('opportunityType'));
    this.groupedOpportunities = groupByType(opportunities);
    this.internships = this.groupedOpportunities[OpportunityType.internship];
    this.researchs = this.groupedOpportunities[OpportunityType.research];
  }

  refresh($event) {
    this.opportunitiesSub = this.opportunitiesProvider.getOpportunities()
      .subscribe(opportunities => {
        this.mapOpportunitiesByType(opportunities);
        $event.complete();
      }, () => $event.cancel());
  }

  ionViewDidLoad(){
    this.opportunitiesSub = this.opportunitiesProvider.getOpportunities()
      .subscribe(opportunities => (this.mapOpportunitiesByType(opportunities)));
  }

  ngOnDestroy() {
    this.opportunitiesSub.unsubscribe();
  }
}
