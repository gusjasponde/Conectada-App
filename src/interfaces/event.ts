export interface Social {
    title: Number,
    link: String,
    clicks: Number,
};

export interface Event {
    id: Number,
    eventType: Number,
    title: String,
    description: String,
    date: Date,
    latitude: Number,
    longitude: Number,
    socials?: Array<Social>,
};

