export type Feed = {
    id: Number,
    image?: String,
    feedType: Number,
    name: String,
    description: String,
};

export type ViewFeed = {
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
