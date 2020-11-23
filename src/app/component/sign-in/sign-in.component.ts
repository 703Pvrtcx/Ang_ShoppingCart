import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from "../../service/authenticate.service";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, FormBuilder,FormControl, ReactiveFormsModule, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { LoginAuthService } from "../../service/login-auth.service";  


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: LoginAuthService,
    private authoService: AuthenticateService
  ) {
  }

  async ngOnInit() {

    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });

  }

  async onSubmit() {
  //  this.authoService.SignIn(this.form.value.username,this.form.value.password);
    
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        const username = this.form.get('username').value;
        const password = this.form.get('password').value;
       
        await this.authService.loginEmailPassword(username, password);
      } catch (err) {
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }
}
  
  
  
  
  
  /*form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  hide = true;
  loginType:string;

  email;
  password;
  loginForm: FormGroup;
  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private fb: FormBuilder, private authService: LoginAuthService) {
      this.loginForm = this.fb.group({
        email: ['',Validators.required, Validators],
        password: ['',Validators.required, Validators]
      })
    }
  async ngOnInit() { 
  }
 async onSubmit() {
            this.loginInvalid = false;
            this.formSubmitAttempt = false;
      if (this.form.valid) {
      try {
       const username = this.loginForm.get('username').value;
       const password = this.loginForm.get('password').value;
       await this.authService.loginEmailPassword(username, password);
       } catch (err) {
                 this.loginInvalid = true;
          }
    } else {
      this.formSubmitAttempt = true;
   }
 }
 formSubmit(loginForm){
  var em = this.loginForm.value.email;
  var pw = this.loginForm.value.password;
  this.authService.loginEmailPassword(em,pw);
  //this.loginForm.reset();
}
}*/
