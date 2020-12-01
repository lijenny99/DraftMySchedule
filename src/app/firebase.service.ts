import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import { Observable, of } from 'rxjs';
import * as firebase from 'firebase/app'


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  
  constructor(public firebaseAuth : AngularFireAuth, public afAuth: AngularFireAuth) { }

  async signin(email: string, password : string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      alert('Login successful')
    }, err => alert(err.message))
  }

  async signup(email: string, password : string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
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

  private handleError<T>(result?: T) {
      return (error: any): Observable<T> => {
        // Display error in alert
        alert(error.error)
    
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

}