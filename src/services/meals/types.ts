export type Restaurant = {
    id: Number,
    image?: String,
    restaurantType: Number,
    title: String,
    description: String,
    latitude: Number,
    longitude: Number,
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
