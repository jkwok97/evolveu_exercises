import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBgOlDyM11tmicbyJP1YW02T-bM3tSN744',
      authDomain: "recipe-book-5a7de.firebaseapp.com",
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
