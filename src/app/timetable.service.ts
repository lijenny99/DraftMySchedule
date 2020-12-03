import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {
  
  constructor(private http: HttpClient) { }

  // Get timetable entry for given subject code, course code and optional course component
  getTimetableInfo(sub: string, course: string): Observable<any> {
    return this.http.get(`/subjects/${sub}/${course}`).pipe(
      catchError(this.handleError<any>())
    )
  }

  getKeywordInfo(key: string): Observable<any> {
    return this.http.get(`/keyword/${key}`).pipe(
      catchError(this.handleError<any>())
    )
  }

  register(user: string, email: string): Observable<any>  {
    return this.http.post<any>('/register',{"user": user, "email": email}).pipe(
      catchError(this.handleError<any>())
    )
  }

  writeReview(token: string, sub: string, course: string, review: string): Observable<any>  {
    const headers = {'Authorization':'Bearer ' + token}
    return this.http.post<any>('/reviews',{"subject": sub, "course": course, "review": review},{headers}).pipe(
      catchError(this.handleError<any>())
    )
  }

  // Create a new schedule
  createSchedule(token: string, schedule: string, description: string, visibility: boolean): Observable<any> {
    const headers = {'Authorization':'Bearer ' + token}
    return this.http.post<any>('/schedules/',{"scheduleName": schedule, "description": description, "visibility": visibility},{headers}).pipe(
      catchError(this.handleError<any>())
    );
  }

  updateSchedule(token: string, schedule: string, description: string, visibility: boolean, oldName: string): Observable<any> {
    const headers = {'Authorization':'Bearer ' + token}
    return this.http.put<any>(`/schedules/${oldName}`,{"scheduleName": schedule, "description": description, "visibility": visibility},{headers}).pipe(
      catchError(this.handleError<any>())
    );
  }

  // Save a list of subject code, course code pairs under a given schedule name
  saveSchedule(token: string, schedule: string, x: Array<{}>): Observable<any> {
    const headers = {'Authorization':'Bearer ' + token}
    return this.http.post(`/schedules/${schedule}`,{"courseList": x},{headers}).pipe(
      catchError(this.handleError<any>())
    );
  }

  // Get the list of subject code, course code pairs for a given schedule
  viewSchedule(token: string, schedule: string): Observable<any> {
    const headers = {'Authorization':'Bearer ' + token}
    return this.http.get(`/schedules/${schedule}`,{headers}).pipe(
      catchError(this.handleError<any>())
    );
  }

  // Delete a schedule with a given name
  deleteOne(token: string, schedule: string): Observable<any> {
    const headers = {'Authorization':'Bearer ' + token}
    return this.http.delete(`/schedules/${schedule}`,{headers}).pipe(
      catchError(this.handleError<any>())
    );
  }

  getPrivateSchedules(token: string): Observable<any> {
    const headers = {'Authorization':'Bearer ' + token}
    return this.http.get('/schedules',{headers}).pipe(
      catchError(this.handleError<any>())
    );
  }


  // Get a list of schedule names and the number of courses that are saved in each schedule
  getPublicSchedules(): Observable<any> {
    return this.http.get('/publicschedules').pipe(
      catchError(this.handleError<any>())
    );
  }

  getReviews(): Observable<any> {
    return this.http.get('/reviews').pipe(
      catchError(this.handleError<any>())
    );
  }

  reviewVisibility(c: string, r: string, v: string): Observable<any> {
    return this.http.put('/reviews',{"courseID": c, "review": r, "visibility": v}).pipe(
      catchError(this.handleError<any>())
    );
  }

  changeAccountSettings(email: string, access: string, status: string): Observable<any> {
    return this.http.put('/account',{"email": email, "access": access, "status": status}).pipe(
      catchError(this.handleError<any>())
    );
  }

  updatePolicy(policy: string, text: string): Observable<any> {
    return this.http.put('/policy',{"policy": policy, "text": text}).pipe(
      catchError(this.handleError<any>())
    );
  }

  // Handle failed HTTP operations
  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      // Display error in alert
      alert(error.error)
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
