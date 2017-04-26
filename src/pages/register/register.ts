import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as firebase from "firebase";
import { HomePage } from '../home/home';
import { Login } from '../login/login';
/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class Register {
  email: any;
  password: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }
  register(){
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function(error) {
      // Handle Errors here.
      var errorMessage = error.message;
      console.log(errorMessage);
    });
  }
  loginpage(){
   this.navCtrl.push(Login);
  }
}
