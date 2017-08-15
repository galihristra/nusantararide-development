import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, private geolocation: Geolocation) {

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

    this.geolocation.getCurrentPosition(this.options).then((pos: Geoposition) => {
      this.currentPos = pos;
      console.log(pos);

      this.addMap(pos.coords.latitude, pos.coords.longitude);
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
      position: this.map.getCenter()
    });

    let content = "<p>This is your current position !</p>";
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }

  // use location
  useLocation(){
    console.log(this.latitude + " and " +  this.longitude);
  }

  // user dismiss
  cancel(){
    this.viewCtrl.dismiss();
  }

}
