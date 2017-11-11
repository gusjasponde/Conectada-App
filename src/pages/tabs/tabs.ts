import { IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';

import { Home } from '../home/home';
import { Events } from '../events/events';
import { Opportunities } from '../opportunities/opportunities';
import { Meals } from '../meals/meals';
import { Reports } from '../reports/reports';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab0Root = Home;
  tab1Root = Events;
  tab2Root = Opportunities;
  tab3Root = Meals;
  tab4Root = Reports;
}
