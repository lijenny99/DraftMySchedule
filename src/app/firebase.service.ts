import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import { Observable, of } from 'rxjs';
import * as firebase from 'firebase/app'
import { Router } from '@angular/router';
import { TimetableService } from './timetable.service';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  // Global variables
  isAdmin = false;
  isLoggedIn = false;
  isVerified = false;
  
  // Initialize constructor to check if user is logged in and is admin
  constructor(public afAuth : AngularFireAuth, private router: Router, public timetableService: TimetableService) { 
    if (localStorage.getItem('user'))
      this.isLoggedIn = true
    if (localStorage.getItem('admin'))
      this.isAdmin = true
  }
  
  // Sign in
  async signin(email: string, password : string){
    await this.afAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      // Add to local storage and set global variable to true
      this.isLoggedIn = true;
      alert('Login successful')
      localStorage.setItem('user',JSON.stringify(res.user))
      this.router.navigate(['/schedule'])
    }, err => alert(err.message))
  }

  // Sign up
  async signup(email: string, password : string){
    await this.afAuth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
      console.log(res)
    }, err => alert(err.message))
  }

  // Third party login
  async loginWithGoogle(){
    const provider = new firebase.default.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    await this.afAuth.signInWithPopup(provider).then(res => {
      this.isLoggedIn = true;
      localStorage.setItem('user',JSON.stringify(res.user))
    }, err => alert(err))
  }

  // Sign out
  signout() {
    this.afAuth.signOut().then(res => {
      // Clear local storage and set global variable to false
      this.isLoggedIn = false;
      localStorage.removeItem('user')
      localStorage.removeItem('admin')
      alert('Successfully signed out!')
      window.location.reload();
    }).catch(err =>
        console.log(err))
  }

  // Check if user is logged in through getting token
  getToken() {
    return new Promise<any>((res,rej) => {
      this.afAuth.onAuthStateChanged(user => {
        if(user) { // User exists
          user.getIdToken(true).then(id => {
            res(id);
        }, err => rej(err))} 
        else { // No user
          console.log('No user logged in')
        }
      })
    })
  }

  verifyLogin(email: string, pwd: string) {
    return new Promise<any>((resolve,reject) => {
      firebase.default.auth().signInWithEmailAndPassword(email,pwd).then(res => {
        const user = res.user;
        this.isVerified = user.emailVerified;
        if (!this.isVerified) {
          if(confirm('Email has not been verified. Click OK to send another email')) {
            this.afAuth.onAuthStateChanged(e => {
              e.sendEmailVerification().then(() => {
                alert("Verification email re-sent")
                window.location.reload();
              }).catch(err => alert('Sending email failed'))
            })
          }
          
        } else {
          this.signin(email,pwd);
        }
      },err => alert(err))
    })
  }

  // Update password through firebase function
  updatePassword(pwd) {
    return new Promise<any>((res,rej) => {
      var user = firebase.default.auth().currentUser;
      user.updatePassword(pwd).then(e => {
        alert('Password has been updated')
        window.location.reload()
      }).catch(err => {
        console.log(err)
      })
    })
  }

  // 
  async changePassword(oldPwd,newPwd) {
    const user = firebase.default.auth().currentUser;
    try {
      // Check if user is logged in
      await this.reauthenticate(oldPwd)
      // Allow user to update password
      await this.updatePassword(newPwd)
    } catch {
      alert('Current password invalid')
    }
  }
  
  // Check if user is logged in / has logged in recently
  reauthenticate(currentPwd) {
    const user = firebase.default.auth().currentUser;
    const cred = firebase.default.auth.EmailAuthProvider.credential(user.email,currentPwd);
    return user.reauthenticateWithCredential(cred);
  }

  private handleError<T>(result?: T) {
      return (error: any): Observable<T> => {
        // Display error in alert
        alert(error.error)
    
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

}