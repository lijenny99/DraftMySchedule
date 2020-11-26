import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {
  
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  // Get all available subject codes
  getSubjects(): Observable<any> {
    return this.http.get(`/subjects`).pipe(
      catchError(this.handleError<any>())
      )
  }

  // Get all course codes for a given subject code
  getSubject(sub: string): Observable<any> {
    return this.http.get(`/subjects/${sub}`).pipe(
      catchError(this.handleError<any>())
    )
  }

  // Get timetable entry for given subject code, course code and optional course component
  getTimetableInfo(sub: string, course: string, component: string): Observable<any> {
    return this.http.get(`/subjects/${sub}/${course}/${component}`).pipe(
      catchError(this.handleError<any>())
    )
  }

  // Create a new schedule
  createSchedule(schedule: string): Observable<any> {
    return this.http.post<any>('/schedules/',{"name": schedule},this.httpOptions).pipe(
      catchError(this.handleError<any>())
    );
  }

  // Save a list of subject code, course code pairs under a given schedule name
  saveSchedule(schedule: string, x: Array<{}>): Observable<any> {
    return this.http.put(`/schedules/${schedule}`,{"courseList": x},this.httpOptions).pipe(
      catchError(this.handleError<any>())
    );
  }

  // Get the list of subject code, course code pairs for a given schedule
  viewSchedule(schedule: string): Observable<any> {
    return this.http.get(`/schedules/${schedule}`).pipe(
      catchError(this.handleError<any>())
    );
  }

  // Delete a schedule with a given name
  deleteOne(schedule: string): Observable<any> {
    return this.http.delete(`/schedules/${schedule}`,this.httpOptions).pipe(
      catchError(this.handleError<any>())
    );
  }

  // Get a list of schedule names and the number of courses that are saved in each schedule
  getSchedules(): Observable<any> {
    return this.http.get('/schedules').pipe(
      catchError(this.handleError<any>())
    );
  }

  // Delete all schedules
  deleteAll(): Observable<any>{
    return this.http.delete('/schedules').pipe(
      catchError(this.handleError<any>())
    );;
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
