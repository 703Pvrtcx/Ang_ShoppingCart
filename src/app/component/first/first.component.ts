import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
//import {TEST_LIST} from 'src/mocks/test.mock';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})

export class FirstComponent implements OnInit {
 
  //mockList = TEST_LIST;
  //value = true;
  submitted = false;
  loginForm: FormGroup;

  constructor(private activateRoute: ActivatedRoute  ,private router:Router, private fb: FormBuilder) { 
     

    this.loginForm = this.fb.group({ 
        username: ['CodeTribe',Validators.required],
        password: ['admin',Validators.required]
       }
    );
  }
  ngOnInit(): void {
  }
  submit(){ 
  }
  submitMethod(form){
    if(form){
      window.alert("Successful login") 
      this.router.navigateByUrl('second');
     }else{
      window.alert("Invalid input");
      this.loginForm.reset();
   }
}
}
