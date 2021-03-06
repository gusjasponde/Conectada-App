export enum RestaurantType {
    bandejao = 1,
    restaurant = 2,
};

export interface Restaurant {
    id: String,
    image?: String,
    restaurantType: RestaurantType,
    title: String,
    description: String,
    latitude: Number,
    longitude: Number,
};
