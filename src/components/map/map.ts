import { Component, Input, ElementRef, ViewChild,
  OnChanges, Output, EventEmitter} from '@angular/core';

import { MapConfig } from '../../interfaces/mapConfig';
import { Marker, SelectedMarkEvent } from '../../interfaces/marker';

declare const google;

@Component({
  selector: 'map',
  templateUrl: 'map.html'
})
export class MapComponent implements OnChanges {
  @Input() markers: Array<Marker> = []; 
  @Input() config: MapConfig;
  @Output() selectedMarker = new EventEmitter<SelectedMarkEvent>();  
  @ViewChild('map') mapElement: ElementRef;

  googleOptions: {} = {};
  map: any;

  constructor() {}

  addMarker(marker: Marker) {
    const { title, description, latitude, longitude } = marker;
    const googleMarker = new google.maps.Marker({
      position: new google.maps.LatLng(latitude, longitude),
      map: this.map, title,
    });
    new google.maps.event.addListener(googleMarker, 'click', () => {
      this.selectedMarker.emit({marker, googleMarker, map: this.map});
    });
  }

  buildGoogleOptions() {
    const { initialLatitude, initialLongitude, zoom, mapTypeControl,
      scaleControl, streetViewControl, rotateControl } = this.config;
    const center = new google.maps.LatLng(initialLatitude, initialLongitude);
    this.googleOptions = {
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center, zoom, mapTypeControl, scaleControl,
      streetViewControl, rotateControl
    };
  }

  refresh() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, this.googleOptions);
  }

  addMarkers() {
    this.markers.forEach(marker => this.addMarker(marker));
  }

  ngOnChanges() {
    this.buildGoogleOptions();
    this.refresh();
    this.addMarkers();
  }
}
