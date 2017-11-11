import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Home } from '../providers/home/home';
import { Events } from '../providers/events/events';
import { Meals } from '../providers/meals/meals';
import { Opportunities } from '../providers/opportunities/opportunities';
import { Profiles } from '../providers/profiles/profiles';
import { Reports } from '../providers/reports/reports';
import { Auths } from '../providers/auths/auths';
import { Api } from '../providers/api';

import { TabsPage } from '../pages/tabs/tabs';
import { ModalPage } from '../pages/modal/modal';
import { LoginPage } from '../pages/login/login';
import { InvitePage } from '../pages/invite/invite';
import { InviteSentPage } from '../pages/inviteSent/inviteSent';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { EventsPage } from '../pages/events/events';
import { MealsPage } from '../pages/meals/meals';
import { OpportunitiesPage } from '../pages/opportunities/opportunities';
import { OpportunityModalPage } from '../pages/opportunityModal/opportunityModal';
import { ReportsPage } from '../pages/reports/reports';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { Facebook } from '@ionic-native/facebook';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ProfilePage,
    HomePage,
    EventsPage,
    MealsPage,
    OpportunityModalPage,
    OpportunitiesPage,
    ReportsPage,
    ModalPage,
    LoginPage,
    InvitePage,
    InviteSentPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ProfilePage,
    HomePage,
    EventsPage,
    MealsPage,
    OpportunityModalPage,
    OpportunitiesPage,
    ReportsPage,
    ModalPage,
    LoginPage,
    InvitePage,
    InviteSentPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Events,
    Meals,
    Opportunities,
    Profiles,
    Reports,
    Auths,
    Home,
    Facebook,
    Api,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
