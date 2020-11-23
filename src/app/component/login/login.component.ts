import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from "../../service/authenticate.service";
import { FormsModule, FormBuilder, ReactiveFormsModule, FormGroup, Validators } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email;
  password;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,private auth: AuthenticateService) {
    this.loginForm = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    }) 
   }
  ngOnInit(): void {
    this.loginForm.reset();
  }
  formSubmit(loginForm){
    var em = this.loginForm.value.email;
    var pw = this.loginForm.value.password;

    window.alert("Calling create");  
   // this.auth.SignUp(em,pw);
    //this.auth.SignIn(em,pw);
    this.auth.GoogleAuth();
    window.alert("after create"); 
    this.loginForm.reset();
  }
  createNewUser(){
    //this.auth.signInEmail(this.email,this.password);
  }
  signinUser(){
   this.auth.signInEmail(this.email,this.password);
   window.alert("Email signin");
  }
  signinPh(){
    window.alert("signin phone");
    //this.router.navigateByUrl('phone');
  }
  signinFb(){
    window.alert("signin Facebook");
   // this.router.navigateByUrl('facebook'); 
  }
  signinGm(){
    window.alert("signin Phone");
    //this.router.navigateByUrl('google');
  }
 


}
