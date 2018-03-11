export interface Social {
    title: Number,
    link: String,
    clicks: Number,
};

export enum EventType {
    party = 1,
    academic = 2,
};

export interface Event {
    id: String,
    eventType: EventType,
    title: String,
    description: String,
    date: Date,
    latitude: Number,
    longitude: Number,
    socials?: Array<Social>,
};
