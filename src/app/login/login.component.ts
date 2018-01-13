import { Component,ElementRef,ViewChild } from '@angular/core';
import { Constants } from '../app.constants';
import { FormsModule, ReactiveFormsModule, EmailValidator } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:FormGroup;  
  public invalidEmail: string = Constants.INVALID_EMAIL;
  public invalidPassword: string = Constants.INVALID_PASSWORD;
  public formSubmitted :boolean = false;

  constructor(
   private fb: FormBuilder,
   private loginService: LoginService
 ) {
 this.loginForm = fb.group({
   'userName' : [null, Validators.required],
   'password' : [null, Validators.required],
 });
}

  submitForm(formObj){
    this.formSubmitted = true;
      if(formObj.controls.userName.valid && formObj.status !="INVALID"){
         this.loginService.authenticate();
      }
  }
  signInUser(){
    console.log("Login Successfull");
  }

}