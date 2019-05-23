import { Component } from '@angular/core';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = {timestampsInSnapshots: true};
var firebaseConfig = {
  apiKey: "AIzaSyBlB1AJfvxiCA_87iMyBFOTtVE1GDtXBX4",
  authDomain: "control-project-1770c.firebaseapp.com",
  databaseURL: "https://control-project-1770c.firebaseio.com",
  projectId: "control-project-1770c",
  storageBucket: "control-project-1770c.appspot.com",
  messagingSenderId: "694836890432",
  appId: "1:694836890432:web:0fdb919073d31148"
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {
  title = 'control-project-angular';

  ngOnInit() {
    firebase.initializeApp(firebaseConfig);
    firebase.firestore().settings(settings);
  }
}
