import { IonicPage, NavController, NavParams,
  ViewController, LoadingController, ModalController } from 'ionic-angular';
import { Component, OnDestroy } from '@angular/core';

import { ProfilePage } from '../profile/profile';
import { Home } from '../../providers/home/home';
import { Feed, ViewFeed } from '../../interfaces/feed';
import { OpportunityModalPage } from '../opportunityModal/opportunityModal';
import { ModalPage } from '../modal/modal';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnDestroy {
  feeds: Array<ViewFeed> = [];
  feedsSub: Subscription;

  constructor (
    private nav: NavController,
    private viewCtrl: ViewController,
    private params: NavParams,
    private modalCtrl: ModalController,
    private home: Home
  ) {}

  openProfile() {
    this.nav.push(ProfilePage);
  }

  fillFeedInfo(feed: any, typeText: string, icon: string,
    showMore: () => void, moreText: undefined | string = undefined) {
    feed.feedTypeText = typeText;
    feed.icon = icon;
    feed.showMore = showMore;
    feed.moreText = moreText;
    return feed;
  }

  mapFeedsByType(feeds: Array<any>) {
    return feeds.map(feed => {
      feed.shortDescription = feed.description.slice(0, 100);
      feed.showMoreText = 'Ver mais';
      switch (feed.feedType) {
        case 0:
          this.fillFeedInfo(feed, 'Estágio', 'star', () => this.showOpportunity(feed));
          break;
        case 1:
          this.fillFeedInfo(feed, 'Pesquisa', 'star', () => this.showOpportunity(feed));
          break;
        case 2:
          this.fillFeedInfo(feed, 'Restaurante', 'restaurant', () => this.showRestaurant(feed));
          break;
        case 3:
          this.fillFeedInfo(feed, 'Evento', 'calendar', () => {}, '');
          break;
        default:
          this.fillFeedInfo(feed, 'Informativo', 'text', () => this.showText(feed));
          break;
      }
      return feed;
    });
  }

  showOpportunity(viewFeed: ViewFeed) {
    const modal = this.modalCtrl.create(OpportunityModalPage, {
      id: viewFeed.id,
      opportunityType: viewFeed.feedType,
      title: viewFeed.name,
      description: viewFeed.description,
    });
    modal.present();
  }

  showRestaurant(viewFeed: ViewFeed) {
    const modal = this.modalCtrl.create(ModalPage, {
      title: viewFeed.name,
      description: viewFeed.description,
    });
    modal.present();
  }

  showText(viewFeed: ViewFeed) {
    const modal = this.modalCtrl.create(ModalPage, {
      title: viewFeed.name,
      description: viewFeed.description,
    });
    modal.present();
  }

  refresh($event) {
    this.feedsSub = this.home.getFeeds()
      .subscribe(feeds => {
        this.feeds = this.mapFeedsByType(feeds);
        $event.complete();
      }, () => $event.cancel());
  }

  ionViewDidLoad() {
    this.feedsSub = this.home.getFeeds()
      .subscribe(feeds => (this.feeds = this.mapFeedsByType(feeds)));
  }

  ngOnDestroy() {
    this.feedsSub.unsubscribe();
  }
}
