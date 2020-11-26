import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Form input
  signUpForm = new FormGroup({
    email: new FormControl('',[
      Validators.required
    ]),
    password: new FormControl('',[
      Validators.required
    ]),
  });

  isSignedIn = false;

  constructor(public firebaseService : FirebaseService){}
  ngOnInit(){
    if(localStorage.getItem('user')!== null)
      this.isSignedIn = true;
    else
      this.isSignedIn = false;
  }
  async signUp(){
    const e = this.signUpForm.controls.email.value;
    const pwd = this.signUpForm.controls.password.value;
    console.log(e,pwd)
    await this.firebaseService.signup(e,pwd)
    if (this.firebaseService.isLoggedIn)
      this.isSignedIn = true;
  }
  async onSignin(){
    const e = this.signUpForm.controls.email.value;
    const pwd = this.signUpForm.controls.password.value;
    await this.firebaseService.signin(e,pwd)
    if (this.firebaseService.isLoggedIn)
      this.isSignedIn = true;
  }
  handleLogout(){
    this.isSignedIn = false;

  }
}
