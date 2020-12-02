import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../firebase.service';
import { TimetableService } from '../timetable.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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

  show: boolean = false;

  constructor(public firebaseService : FirebaseService, public timetableService: TimetableService, private router: Router) {}
  ngOnInit(){
  }

  async signUp(){
    const n = this.loginForm.controls.name.value;
    const e = this.loginForm.controls.email.value;
    const pwd = this.loginForm.controls.password.value;
    await this.firebaseService.signup(e,pwd).then(res => {
      this.timetableService.register(n,e).subscribe();
      this.router.navigate(['/schedule'])
    })

  }
  async signIn(){
    const em = this.loginForm.controls.email.value;
    const pwd = this.loginForm.controls.password.value;

    await this.timetableService.getPublicSchedules().subscribe(data => {
      data.forEach(e => {
        if (em == e.email && e.accountStatus == "deactivated") {
          alert('Your account has been deactivated. Please contact admin@gmail.com to resolve this issue.')
          window.location.reload()
        }
      })
    })
    
    await this.firebaseService.signin(em,pwd).then(res => {
      this.router.navigate(['/schedule'])
    })

  }
  
  toggleLogin() {
    this.show = !this.show;
  }

  googleLogin() {
    this.firebaseService.loginWithGoogle().then(res => {
      this.router.navigate(['/schedule'])
    })
  }
}
