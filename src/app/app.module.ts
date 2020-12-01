import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire'

import { AppComponent } from './app.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FirebaseService } from './firebase.service';
import { PublicCourseListComponent } from './public-course-list/public-course-list.component';

const config = {
  apiKey: "AIzaSyB72rXHZQusPEFcgpxSl6wMLzWTKxpAUqk",
  authDomain: "se3316-lab5-a1775.firebaseapp.com",
  databaseURL: "https://se3316-lab5-a1775.firebaseio.com",
  projectId: "se3316-lab5-a1775",
  storageBucket: "se3316-lab5-a1775.appspot.com",
  messagingSenderId: "386528497172",
  appId: "1:386528497172:web:49eac83ef0f13aa2e42101"
}

@NgModule({
  declarations: [
    AppComponent,
    SubjectsComponent,
    SchedulesComponent,
    LoginComponent,
    PublicCourseListComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'public', component: PublicCourseListComponent},
      {path: 'search', component: SubjectsComponent},
      {path: 'schedule', component: SchedulesComponent},
      {path: 'secure', component: SchedulesComponent},
    ]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
