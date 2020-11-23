import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from "../../service/login-auth.service";
import { AuthenticateService } from "../../service/authenticate.service";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, FormBuilder,FormControl, ReactiveFormsModule, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
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

    //this.authoService.SignUp(this.form.value.username,this.form.value.password);

    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        const username = this.form.get('username').value;
        const password = this.form.get('password').value;
       // this.authoService.SignUp(username,password);
        await this.authService.createUser(username, password);
      } catch (err) {
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }
}

