export type Social = {
    title: Number,
    link: String,
    clicks: Number,
};

export type Event = {
    id: Number,
    eventType: Number,
    title: String,
    description: String,
    date: Date,
    latitude: Number,
    longitude: Number,
    socials?: Array<Social>,
};

export type MapConfig = {
    initialLatitude?: Number,
    initialLongitude?: Number,
    zoom?: Number,
    mapTypeControl?: Boolean,
    scaleControl?: Boolean,
    streetViewControl?: Boolean,
    rotateControl?: Boolean
}
