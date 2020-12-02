import { Component, OnInit } from '@angular/core';
import { TimetableService } from '../timetable.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public users = []
  public reviews = []
  constructor(private timetableService: TimetableService) { }

  ngOnInit(): void {
    this.timetableService.getPublicSchedules().subscribe(data => {
      data.forEach(e => {
        this.users.push(e)
      })
    })

    this.timetableService.getReviews().subscribe(data => {
      data.forEach(e => {
        e.reviews.forEach(p => {
          this.reviews.push({
            course: e.courseID,
            vis: p.visibility,
            text: p.review
          })
        })
        
      })
    })
  }
}
