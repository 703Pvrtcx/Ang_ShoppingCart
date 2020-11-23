import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';



@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  windowRef;
  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    
  ) { }
  createUser(email, password) {
    this.auth.createUserWithEmailAndPassword(email, password).then( () => {
      console.log('account created');
      this.router.navigateByUrl('sign-in');
    }).catch((error) => {
      console.log(error.message);
    });
  }
  loginEmailPassword(email, password) {
    this.auth.signInWithEmailAndPassword(email, password).then( () => {
      console.log('email and password successful login');
      this.router.navigateByUrl('home');
     // this.router.navigateByUrl('');
    }).catch( (error) => {
      console.log(error.message);
    });
  }

  googleSignIn() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(() => {
      console.log('google login successful');
      this.router.navigateByUrl('home');
    }).catch((error) => {
      console.log(error.message);
    });
  }
  facebookSignIn() {
    const provider = new auth.FacebookAuthProvider();
    provider.addScope('user_birthday');
    auth().languageCode = 'fr_FR';
    provider.setCustomParameters({'display': 'popup'});
     auth().signInWithPopup(provider).then(function(result){
      //This gives you Facebbok Access Token. 
      //CAn be used to access the Facebook API
      //var token = result.credential.accessToken;
      var user = result.user;
      window.alert('facebook successful login');
      this.router.navigateByUrl('home');
      //var errorMessage = result.message;
    }).catch(function(error){
      //Handle errors here
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
    
    this.auth.signInWithPopup(new auth.FacebookAuthProvider()).then(() => {
      console.log('facebook successful login');
      window.alert('Facebook good')
      this.router.navigateByUrl('dashboard');
    }).catch((error) => {
      console.log(error.message);
    });
  }

  phoneSignIn() {
      auth().languageCode = 'it';   
      this.windowRef.recaptchaVerifier = new auth.RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',
        'callback': function(response) {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        }
      });
    this.auth.signInWithPopup(new auth.PhoneAuthProvider()).then(() => {
      console.log('phone successful login');
      this.router.navigateByUrl('home');
    }).catch((error) => {
      console.log(error.message);
    });
  }
  recaptcha() {

   // this.windowRef = this.win.windowRef;
    this.windowRef.recaptchaVerifier = new auth.RecaptchaVerifier('recaptcha-container');
    this.windowRef.recaptchaVerifier.render();
  }
  sendCode(phone) {
    const appVerifier = this.windowRef.recaptchaVerifier;
    this.auth.signInWithPhoneNumber(phone, appVerifier).then((result) => {
      this.windowRef.confirmationResult = result;
      console.log('sending code');
    }).catch((error) => {
      console.log(error.message);
    });
  }
  verifyCode(code) {
    this.windowRef.confirmationResult.confirm(code).then(() => {
      console.log('code verified');
    }).catch((error) =>{
      console.log(error.message);
    });
  }
  logout() {
    this.auth.signOut();
    this.router.navigateByUrl('');
  }
}
