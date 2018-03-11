export enum FeedType {
    internship,
    research,
    restaurant,
    event,
    news,
};

export interface Feed {
    id: String,
    image?: String,
    feedType: FeedType,
    name: String,
    description: String,
};

export interface ViewFeed {
    id: Number,
    image?: String,
    feedType: FeedType,
    feedTypeText: String,
    name: String,
    description: String,
    shortDescription: String,
    showMoreText: String,
    showMore: () => {},
};
