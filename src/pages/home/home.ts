import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { Component, OnDestroy } from '@angular/core';

import { ProfilePage } from '../profile/profile';
import { HomeProvider } from '../../providers/home/home';
import { ViewFeed, FeedType } from '../../interfaces/feed';
import { OpportunityModalPage } from '../opportunityModal/opportunityModal';
import { ModalPage } from '../modal/modal';
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
    private modalCtrl: ModalController,
    private homeProvider: HomeProvider
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
        case FeedType.internship:
          this.fillFeedInfo(feed, 'Estágio', 'star', () => this.showOpportunity(feed));
          break;
        case FeedType.research:
          this.fillFeedInfo(feed, 'Pesquisa', 'star', () => this.showOpportunity(feed));
          break;
        case FeedType.restaurant:
          this.fillFeedInfo(feed, 'Restaurante', 'restaurant', () => this.showRestaurant(feed));
          break;
        case FeedType.event:
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
    this.feedsSub = this.homeProvider.getFeeds()
      .subscribe(feeds => {
        this.feeds = this.mapFeedsByType(feeds);
        $event.complete();
      }, () => $event.cancel());
  }

  ionViewDidLoad() {
    this.feedsSub = this.homeProvider.getFeeds()
      .subscribe(feeds => (this.feeds = this.mapFeedsByType(feeds)));
  }

  ngOnDestroy() {
    this.feedsSub.unsubscribe();
  }
}
