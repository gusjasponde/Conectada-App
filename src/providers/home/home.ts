import moment from 'moment';
import { Injectable, Inject } from '@angular/core';

import { Api } from '../api'; 
import { Feed } from '../../interfaces/feed';

const feeds: Array<Feed> = [
    {
        "id": 100,
        "feedType": 5,
        "name": "Reitor",
        "description": "Posição da universidade sobre aulas extracurriculares durante as férias",
    },
    {
        "id": 101,
        "image": "https://images.unsplash.com/photo-1462826303086-329426d1aef5?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=",
        "feedType": 0,
        "name": "Nome da empresa",
        "description": "Procuramos estagiário em várias áreas",
    },
    {
        "id": 102,
        "image": "https://images.unsplash.com/photo-1497842917774-583c63a4ce6b?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=",
        "feedType": 2,
        "name": "Nome do restaurante",
        "description": "Incrível prato especial na terça-feira",
    }
];

@Injectable()
export class Home {
    feeds?: Array<Feed>;
    lastUpdatedAt;

    constructor(
        @Inject(Api) private api: Api) {
    }

    getFeeds(): Promise<any> {
        if (this.shouldRefresh()) {
            return this.refresh();
        }
        return Promise.resolve(this.feeds);
    }

    refresh(): Promise<any> {
        // API Call
        return this.api.getHome()
            .then(feeds => {
                this.feeds = feeds;
                this.lastUpdatedAt = moment();
                return feeds;
            })
            .catch(error => {
                // [todo] send error to GA
                this.lastUpdatedAt = moment();
            });
    }

    shouldRefresh(): boolean {
        if (this.feeds === undefined) return true;
        // 30 seconds
        const lastUpdateDiff = moment().diff(this.lastUpdatedAt);
        if (lastUpdateDiff > 30000) return true;
        return false;
    }
}
