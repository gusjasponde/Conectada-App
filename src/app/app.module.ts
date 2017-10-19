import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomeService } from '../services/home/home';
import { EventsService } from '../services/events/events';
import { MealsService } from '../services/meals/meals';
import { OpportunitiesService } from '../services/opportunities/opportunities';
import { ProfilesService } from '../services/profiles/profiles';
import { ReportsService } from '../services/reports/reports';
import { AuthsService } from '../services/auths/auths';
import { ApiService } from '../services/api';

import { TabsPage } from '../components/tabs/tabs';
import { Modal } from '../components/modal/modal';
import { Login } from '../components/login/login';
import { Invite } from '../components/invite/invite';
import { InviteSent } from '../components/inviteSent/inviteSent';
import { Home } from '../components/home/home';
import { Profile } from '../components/profile/profile';
import { Events } from '../components/events/events';
import { Meals } from '../components/meals/meals';
import { Opportunities } from '../components/opportunities/opportunities';
import { OpportunityModal } from '../components/opportunityModal/opportunityModal';
import { Reports } from '../components/reports/reports';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { Facebook } from '@ionic-native/facebook';

@NgModule({
  declarations: [
    MyApp,
    Profile,
    TabsPage,
    Home,
    Events,
    Meals,
    OpportunityModal,
    Opportunities,
    Reports,
    Modal,
    Login,
    Invite,
    InviteSent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Profile,
    TabsPage,
    Home,
    Events,
    Meals,
    OpportunityModal,
    Opportunities,
    Reports,
    Modal,
    Login,
    Invite,
    InviteSent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    EventsService,
    MealsService,
    OpportunityModal,    
    OpportunitiesService,
    ProfilesService,
    ReportsService,
    AuthsService,
    HomeService,
    Facebook,
    ApiService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
