import { PostAddPage } from './../post-add/post-add';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, ViewController, LoadingController } from 'ionic-angular';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from "@ionic-native/geolocation";

/**
 * Generated class for the MapsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

declare var google;

@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {
  searchInput: string;
  options: GeolocationOptions;
  currentPos: Geoposition;
  map: any;
  @ViewChild('map') mapElement: ElementRef;
  latitude: any;
  longitude: any;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, private geolocation: Geolocation, public loading: LoadingController) {

  }

  ionViewDidEnter() {
    // console.log('ionViewDidLoad MapsPage');
    this.getUserPosition();
  }

  // get current position
  getUserPosition(){
    this.options = {
      enableHighAccuracy : true
    };
    let loader = this.loading.create({
      content: 'Please Wait...'
    });

    loader.present();
    this.geolocation.getCurrentPosition(this.options).then((pos: Geoposition) => {
      this.currentPos = pos;
      console.log(pos);

      this.addMap(pos.coords.latitude, pos.coords.longitude);
      loader.dismiss();
      this.latitude = pos.coords.latitude;
      this.longitude = pos.coords.longitude;
    },(err : PositionError) => {
      console.log("error : " + err.message);
    });
  }

  // create map
  addMap(lat, long){
    let latLng = new google.maps.LatLng(lat, long);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addMarker();
  }

  // adding a marker
  addMarker(){
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter(),
      draggable: true
    });

    let content = "<p>This is your current position !</p>";
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    // open window on marker click
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

    // marker is finished being dragged
    google.maps.event.addListener(marker, 'dragend', (evt) => {
      infoWindow.setOptions({
        content: '<p>Marker dropped: Current Lat: ' + evt.latLng.lat().toFixed(3) + ' Current Lng: ' + evt.latLng.lng().toFixed(3) + '</p>'
      });
      // infoWindow.open(this.map, marker);
      var markerLatLng = marker.getPosition();
      this.map.setCenter(markerLatLng);
      this.latitude = evt.latLng.lat().toFixed(3);
      this.longitude = evt.latLng.lng().toFixed(3);
    });

    // marker is dragged
    google.maps.event.addListener(marker, 'drag', (evt) => {
      console.log("marker is being dragged.");
    });

    // move marker on click
    google.maps.event.addListener(this.map, 'click', (evt) => {
      console.log(evt.latLng);
      marker.setPosition(evt.latLng);
      this.latitude = evt.latLng.lat().toFixed(3);
      this.longitude = evt.latLng.lng().toFixed(3);
      this.map.setCenter(evt.latLng);
    })
  }

  // use location
  useLocation(){
    console.log(this.latitude + " and " +  this.longitude);

    this.navCtrl.push(PostAddPage, {
      lat: this.latitude,
      lng: this.longitude
    });
  }

  // skip
  inputManual() {
    this.navCtrl.push(PostAddPage);
  }

}
