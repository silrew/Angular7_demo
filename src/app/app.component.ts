import { Component, OnInit } from '@angular/core';
import { StateKey } from '@angular/platform-browser/src/browser/transfer_state';
import  * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  feature: string = 'recipe';
  onfeatureSelected(event: string){
     this.feature = event;
  }
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAB8EhJ0SsMd-TLSXkUPAs4PZzlCptJDiw",
      authDomain: "ng-recipe-demo-39c6a.firebaseapp.com"
    })
  }
}
