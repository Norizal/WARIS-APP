import { LoginPage } from './../login/login';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
  public navCtrl: NavController,
  public authService: AuthProvider) {

  }

  
  logout(){
  this.authService.logout();
  this.navCtrl.push(LoginPage);
}

}
