import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import { Observable, of } from 'rxjs';
import * as firebase from 'firebase/app'


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isLoggedIn = false;
  
  constructor(public firebaseAuth : AngularFireAuth, public afAuth: AngularFireAuth) { }

  async signin(email: string, password : string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))
      alert('Login successful')
    }, err => alert(err.message))
  }

  async signup(email: string, password : string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
        this.isLoggedIn = true
        localStorage.setItem('user',JSON.stringify(res.user))
        alert('Account created')
    }, err => alert(err.message))
  }

  async loginWithGoogle(){
    const provider = new firebase.default.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    await this.afAuth.signInWithPopup(provider).then(res => {
      console.log(res);
    }, err => alert(err))
  }

  logout(){
      this.firebaseAuth.signOut()
      localStorage.removeItem('user')
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