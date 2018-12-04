import { AuthProvider } from './../../providers/auth/auth';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  name:string = '';
  password:string = '';
  c_password:string = '';
  email:string = '';
  errorMsg:string;

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams,
  public authService: AuthProvider ,
  public alertCtrl: AlertController  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }


  errorFunc(message){
    let alert = this.alertCtrl.create({
      title: 'Warining!',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }




  myRegister(){
 
    if (this.email.trim()  &&  this.name.trim()  && this.password.trim()  && this.c_password.trim()) {    
      
    
       
      if (this.password.trim()  === '') {
        this.errorFunc('Please put your password')

        if(this.c_password.trim() == ''){
          this.errorFunc('Please put your reconfrim password')
        }

        if(this.password.trim() != this.c_password.trim()){
          this.errorFunc('Password not same')
        }
 
      }else{
 
        let credentials = {
          email: this.email,
          name: this.name,
          password: this.password,
          c_password: this.c_password
        };
 
        
         this.authService.createAccount(credentials).then((result) => {
            console.log(result);
            this.navCtrl.setRoot(LoginPage);
           
        }, (err) => {
     
            console.log(err);
            this. errorFunc('Wrong credentials ! try again')
            console.log("credentials: "+JSON.stringify(credentials))
            
        });
 
      }
      
   }
   else{
    
    this. errorFunc('Please put a valid password !  for ex:(123456)')
   
    }
 

}


}
