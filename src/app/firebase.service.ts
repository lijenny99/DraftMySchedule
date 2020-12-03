import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import { Observable, of } from 'rxjs';
import * as firebase from 'firebase/app'
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService implements CanActivate {
  
  isLoggedIn = false;
  constructor(public firebaseAuth : AngularFireAuth, public afAuth: AngularFireAuth, private router: Router) { 
    if (localStorage.getItem('user'))
      this.isLoggedIn = true
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  async signin(email: string, password : string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true;
      alert('Login successful')
      localStorage.setItem('user',JSON.stringify(res.user))
    }, err => alert(err.message))
  }

  async signup(email: string, password : string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true;
      localStorage.setItem('user',JSON.stringify(res.user))
      alert('Account created')  
    }, err => alert(err.message))
  }

  async loginWithGoogle(){
    const provider = new firebase.default.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    await this.afAuth.signInWithPopup(provider).then(res => {
      this.isLoggedIn = true;
      console.log(res);
    }, err => alert(err))
  }

  signout() {
    this.firebaseAuth.signOut().then(res => {
      this.isLoggedIn = false;
      localStorage.removeItem('user')
      alert('Successfully signed out!')
    }).catch(err =>
        console.log(err))
  }

  getToken() {
    return new Promise<any>((res,rej) => {
      this.afAuth.currentUser.then(user => {
        if(user) {
          user.getIdToken(true).then(id => {
            res(id);
        }, err => rej(err))} 
        else {
          console.log('No user logged in')
        }
      })
    })
  }

  updatePassword(pwd) {
    return new Promise<any>((res,rej) => {
      var user = firebase.default.auth().currentUser;
      user.updatePassword(pwd).then(e => {
        alert('Password has been updated')
      }).catch(err => {
        console.log(err)
      })
    })
  }

  async changePassword(oldPwd,newPwd) {
    const user = firebase.default.auth().currentUser;
    try {
      await this.reauthenticate(oldPwd)
      await this.updatePassword(newPwd)
    } catch {
      alert('Current password invalid')
    }
  }
  
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