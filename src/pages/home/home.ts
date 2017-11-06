import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private geolocation: Geolocation) {

  }

  recuperarPosicao(){
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log("Latitude", resp.coords.latitude);
      console.log("Longitude", resp.coords.longitude);
      alert("Latitude" + resp.coords.latitude + "Longitude" + resp.coords.longitude)
      })
  }

}
