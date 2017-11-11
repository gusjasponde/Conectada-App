export interface Marker {
    title: String,
    description: String,
    latitude: Number,
    longitude: Number
};

export interface SelectedMarkEvent {
    marker: Marker,
    googleMarker: {},
    map: any
}
