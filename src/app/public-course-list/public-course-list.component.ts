import { Component, OnInit } from '@angular/core';
import { TimetableService } from '../timetable.service';

@Component({
  selector: 'app-public-course-list',
  templateUrl: './public-course-list.component.html',
  styleUrls: ['./public-course-list.component.css']
})
export class PublicCourseListComponent implements OnInit {
  public courseLists = [];
  public courseIDs = [];
  constructor(private timetableService: TimetableService) { }

  ngOnInit(): void {
    this.timetableService.getCourseLists().subscribe(data => {
      data.forEach(e => {
        e.schedules.forEach(el => {
          if (el.visibility == "true") {
            this.courseLists.push({
              user: e.user,
              lastModified: el.lastModified,
              sName: el.scheduleName,
              num: el.numCourses,
              desc: el.description,
              courseIDList: el.courseList,
            })
            console.log(el)
          }
        })
      })
      console.log(this.courseLists)
      this.courseLists.sort((a,b) => new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime())
    })
  }

  viewDetails(x) {
    x.show = !x.show;
  }

}