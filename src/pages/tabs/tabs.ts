import { IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { EventsPage } from '../events/events';
import { OpportunitiesPage } from '../opportunities/opportunities';
import { MealsPage } from '../meals/meals';
import { ReportsPage } from '../reports/reports';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab0Root = HomePage;
  tab1Root = EventsPage;
  tab2Root = OpportunitiesPage;
  tab3Root = MealsPage;
  tab4Root = ReportsPage;
}
