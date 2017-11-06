import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps,GoogleMap,GoogleMapsEvent,GoogleMapOptions, CameraPosition,MarkerOptions,Marker} from '@ionic-native/google-maps';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  map: GoogleMap;
  constructor(public navCtrl: NavController, private geolocation: Geolocation, public mapa: GoogleMaps) {

  }


  
  recuperarPosicao(){
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log("Latitude", resp.coords.latitude);
      console.log("Longitude", resp.coords.longitude);
      alert("Latitude" + resp.coords.latitude + "Longitude" + resp.coords.longitude)
      })
  }

}
