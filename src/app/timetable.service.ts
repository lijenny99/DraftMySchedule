import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {
  
  constructor(private http: HttpClient) { }

  // Define common routes
  SCHED_URL = 'schedules'
  REVIEW_URL = 'reviews'
  POLICY_URL = 'policy'

  // Get timetable entry for given subject code, course code and optional course component
  getTimetableInfo(sub: string, course: string): Observable<any> {
    return this.http.get(`/subjects/${sub}/${course}`).pipe(
      catchError(this.handleError<any>())
    )
  }

  // Keyword search
  getKeywordInfo(key: string): Observable<any> {
    return this.http.get(`/keyword/${key}`).pipe(
      catchError(this.handleError<any>())
    )
  }

  // Register new user
  register(token: string, user: string, email: string): Observable<any>  {
    const headers = {'Authorization':'Bearer ' + token}
    return this.http.post<any>('/register',{"user": user, "email": email},{headers}).pipe(
      catchError(this.handleError<any>())
    )
  }

  // Write a review
  writeReview(token: string, sub: string, course: string, review: string): Observable<any>  {
    const headers = {'Authorization':'Bearer ' + token}
    return this.http.post<any>(`/${this.REVIEW_URL}`,{"subject": sub, "course": course, "review": review},{headers}).pipe(
      catchError(this.handleError<any>())
    )
  }

  // Create a new schedule
  createSchedule(token: string, schedule: string, description: string, visibility: boolean): Observable<any> {
    const headers = {'Authorization':'Bearer ' + token}
    return this.http.post<any>(`/${this.SCHED_URL}`,{"scheduleName": schedule, "description": description, "visibility": visibility},{headers}).pipe(
      catchError(this.handleError<any>())
    );
  }

  // Update name / description / visibility of a schedule
  updateSchedule(token: string, schedule: string, description: string, visibility: boolean, oldName: string): Observable<any> {
    const headers = {'Authorization':'Bearer ' + token}
    return this.http.put<any>(`/${this.SCHED_URL}/${oldName}`,{"scheduleName": schedule, "description": description, "visibility": visibility},{headers}).pipe(
      catchError(this.handleError<any>())
    );
  }

  // Save a list of subject code, course code pairs under a given schedule name
  saveSchedule(token: string, schedule: string, x: Array<{}>): Observable<any> {
    const headers = {'Authorization':'Bearer ' + token}
    return this.http.post(`/${this.SCHED_URL}/${schedule}`,{"courseList": x},{headers}).pipe(
      catchError(this.handleError<any>())
    );
  }

  // Get the list of subject code, course code pairs for a given schedule
  viewSchedule(token: string, schedule: string): Observable<any> {
    const headers = {'Authorization':'Bearer ' + token}
    return this.http.get(`/${this.SCHED_URL}/${schedule}`,{headers}).pipe(
      catchError(this.handleError<any>())
    );
  }

  // Delete a schedule with a given name
  deleteOne(token: string, schedule: string): Observable<any> {
    const headers = {'Authorization':'Bearer ' + token}
    return this.http.delete(`/${this.SCHED_URL}/${schedule}`,{headers}).pipe(
      catchError(this.handleError<any>())
    );
  }

  // View personal schedules
  getPrivateSchedules(token: string): Observable<any> {
    const headers = {'Authorization':'Bearer ' + token}
    return this.http.get(`/${this.SCHED_URL}`,{headers}).pipe(
      catchError(this.handleError<any>())
    );
  }

  // Get a list of public schedule names and the number of courses that are saved in each schedule
  getPublicSchedules(): Observable<any> {
    return this.http.get('/publicschedules').pipe(
      catchError(this.handleError<any>())
    );
  }

  // List of reviews
  getReviews(): Observable<any> {
    return this.http.get(`/${this.REVIEW_URL}`).pipe(
      catchError(this.handleError<any>())
    );
  }

  // Toggle review visibility
  reviewVisibility(token: string, c: string, r: string, v: string): Observable<any> {
    const headers = {'Authorization':'Bearer ' + token}
    return this.http.put(`/${this.REVIEW_URL}`,{"courseID": c, "review": r, "visibility": v},{headers}).pipe(
      catchError(this.handleError<any>())
    );
  }

  // Update account settings, such as access and status
  changeAccountSettings(token: string, email: string, access: string, status: string): Observable<any> {
    const headers = {'Authorization':'Bearer ' + token}
    return this.http.put('/account',{"email": email, "access": access, "status": status},{headers}).pipe(
      catchError(this.handleError<any>())
    );
  }

  // Display single policy
  viewPolicy(token: string, policy: string): Observable<any> {
    const headers = {'Authorization':'Bearer ' + token}
    return this.http.get(`/${this.POLICY_URL}/${policy}`,{headers}).pipe(
      catchError(this.handleError<any>())
    );
  }

  // Publicly display all policies
  viewAllPolicies(): Observable<any> {
    return this.http.get(`/${this.POLICY_URL}`).pipe(
      catchError(this.handleError<any>())
    );
  }

  // Update a policy
  updatePolicy(token: string, policy: string, text: string): Observable<any> {
    const headers = {'Authorization':'Bearer ' + token}
    return this.http.put(`/${this.POLICY_URL}`,{"policy": policy, "text": text},{headers}).pipe(
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
