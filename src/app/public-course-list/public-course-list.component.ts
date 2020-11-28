import { Component, OnInit } from '@angular/core';
import { TimetableService } from '../timetable.service';

@Component({
  selector: 'app-public-course-list',
  templateUrl: './public-course-list.component.html',
  styleUrls: ['./public-course-list.component.css']
})
export class PublicCourseListComponent implements OnInit {
  public courseLists = []
  constructor(private timetableService: TimetableService) { }

  ngOnInit(): void {
    this.timetableService.getCourseLists().subscribe(data => this.courseLists = data)
  }

}
