import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../firebase.service';
import { TimetableService } from '../timetable.service';
import {Router} from '@angular/router';
import * as firebase from 'firebase/app'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Global variable
  show: boolean = false;

  // Form input
  loginForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('',[
      Validators.required
    ]),
    password: new FormControl('',[
      Validators.required
    ]),
  });

  constructor(public firebaseService : FirebaseService, public timetableService: TimetableService, private router: Router) {}
  ngOnInit(){
  }

  async signUp(){
    // Extract input values
    const n = this.loginForm.controls.name.value;
    const e = this.loginForm.controls.email.value;
    const pwd = this.loginForm.controls.password.value;
    
    if(n == '') {
      alert('Please enter a name')
    }
    else {
      this.trySignUp(n,e,pwd)
    }
  }
  async signIn(){
    // Extract input values
    const em = this.loginForm.controls.email.value;
    const pwd = this.loginForm.controls.password.value;

    await this.timetableService.getPublicSchedules().subscribe(data => {
      data.forEach(e => {
        // Do not allow deactivated users to log in
        if (em == e.email && e.accountStatus == "deactivated") {
          alert('Your account has been deactivated. Please contact admin@gmail.com to resolve this issue.')
          window.location.reload()
        }
      })
    })
    
    await this.firebaseService.verifyLogin(em,pwd)

  }
  
  // Toggle login view UI
  toggleLogin() {
    this.show = !this.show;
  }

  googleLogin() {
    this.firebaseService.loginWithGoogle().then(res => {
      this.timetableService.register('Jenny','lijenny1999@gmail.com').subscribe()
      // Redirect to schedule page
      this.router.navigate(['/schedule'])
    })
  }

  trySignUp(name,email,password) {
    this.firebaseService.signup(email,password).then(res => {
    this.timetableService.register(name,email).subscribe();

      var user = firebase.default.auth().currentUser;
      user.sendEmailVerification().then(e => {
      alert('Verification email sent')
      window.location.reload();
      }).catch(err => alert(err))
  })
  }

}
