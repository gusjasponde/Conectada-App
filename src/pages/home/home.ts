import { IonicPage, NavController, NavParams,
  ViewController, LoadingController, ModalController } from 'ionic-angular';
import { Component } from '@angular/core';

import { Profile } from '../profile/profile';
import { HomeService } from '../../services/home/home';
import { Feed, ViewFeed } from '../../interfaces/feed';
import { OpportunityModal } from '../opportunityModal/opportunityModal';
import { Modal } from '../modal/modal';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {
  feeds: Array<ViewFeed> = [];

  constructor (
    private nav: NavController,
    private viewCtrl: ViewController,
    private params: NavParams,
    private modalCtrl: ModalController,
    private homeService: HomeService
  ) {}

  openProfile() {
    this.nav.push(Profile);
  }

  getFeeds() {
    return this.homeService.getFeeds()
      .then(feeds => {
        this.feeds = feeds.map(feed => {
          feed.shortDescription = feed.description.slice(0, 100);
          feed.showMoreText = 'Ver mais';
          switch (feed.feedType) {
            case 0:
              feed.feedTypeText = 'Estágio';
              feed.icon = 'star';
              feed.showMore = () => this.showOpportunity(feed);
              break;
            case 1:
              feed.feedTypeText = 'Pesquisa';
              feed.icon = 'star';
              feed.showMore = () => this.showOpportunity(feed);
              break;
            case 2:
              feed.feedTypeText = 'Restaurante';
              feed.icon = 'restaurant';              
              feed.showMore = () => this.showRestaurant(feed);
              break;
            case 3:
              feed.feedTypeText = 'Evento';
              feed.icon = 'calendar';
              feed.showMore = () => {};
              feed.moreText = '';               
              break;
            default:
              feed.feedTypeText = 'Informativo';
              feed.icon = 'text';
              feed.showMore = () => this.showText(feed);              
              break;
          }
          return feed;
        });
      });
  }

  showOpportunity(viewFeed: ViewFeed) {
    const modal = this.modalCtrl.create(OpportunityModal, {
      id: viewFeed.id,
      opportunityType: viewFeed.feedType,
      title: viewFeed.name,
      description: viewFeed.description,
    });
    modal.present();
  }

  showRestaurant(viewFeed: ViewFeed) {
    const modal = this.modalCtrl.create(Modal, {
      title: viewFeed.name,
      description: viewFeed.description,
    });
    modal.present();
  }

  showText(viewFeed: ViewFeed) {
    const modal = this.modalCtrl.create(Modal, {
      title: viewFeed.name,
      description: viewFeed.description,
    });
    modal.present();
  }

  ionViewDidLoad(){
    this.getFeeds();
  }

  refresh($event) {
    this.getFeeds()
      .then(() => $event.complete())
      .catch(() => $event.cancel());
  }
}