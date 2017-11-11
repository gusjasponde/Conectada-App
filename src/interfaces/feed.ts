export interface Feed {
    id: Number,
    image?: String,
    feedType: Number,
    name: String,
    description: String,
};

export interface ViewFeed {
    id: Number,
    image?: String,
    feedType: Number,
    feedTypeText: String,
    name: String,
    description: String,
    shortDescription: String,
    showMoreText: String,
    showMore: () => {},
}
