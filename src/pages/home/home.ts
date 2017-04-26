import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Login } from '../login/login';
import { Register } from '../register/register';
import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    // if (!this.isLoggedin()) {
    //   console.log('You are not logged in');
    //   this.navCtrl.push(Login);
    // }
    firebase.auth().onAuthStateChanged(function(user) {
      if (!user) {
          navCtrl.setRoot(Register);
        }
        else {
          navCtrl.setRoot(HomePage);
        }
    });
  }

  isLoggedin() {
    if (window.localStorage.getItem('currentuser')) {
      return true;
    }
  }
  logout(){
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      window.localStorage.clear();
      console.log('You were logged out');
      this.navCtrl.setRoot(Login);
    }).catch(function(error) {
      // An error happened.
      console.log("Have some Error" + error)
    });
  }

}
