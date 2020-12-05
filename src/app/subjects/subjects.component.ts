import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TimetableService } from '../timetable.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  // Global variables
  public timetableInfo = [];
  public reviews = []
  showReview = false;

  // Form input
  subjectsForm = new FormGroup({
    subject: new FormControl(''),
    course: new FormControl(''),
    keyword: new FormControl('')
  });

  constructor(private timetableService: TimetableService) { }

  ngOnInit(): void {
  }

  // Search the time table by subject, subject+course
  search() {
    // Extract input values
    const s = this.subjectsForm.controls.subject.value.toUpperCase()
    const cs = this.subjectsForm.controls.course.value.toUpperCase()
    const key = this.subjectsForm.controls.keyword.value.toUpperCase()

    if (s == '' && cs == '' && key == '') {
      alert('Please enter values')
    } 
    else if (s) { // Search by subject and optional course code component
      this.timetableService.getTimetableInfo(s, cs).subscribe(data => this.timetableInfo = data)
    }
    else if (cs && !s) { // Search by course code only
      this.timetableService.getTimetableInfo(cs, '').subscribe(data => this.timetableInfo = data)
    }
    else { // Search by keyword
      this.timetableService.getKeywordInfo(key).subscribe(data => this.timetableInfo = data)
    }
  }

  // Toggle details view
  viewDetails(subject) {
    subject.show = !subject.show;
  }

  viewReviews(subject,course) {
    this.reviews = [];
    this.showReview = true;
    const cID = subject+' '+course;
    this.timetableService.getReviews().subscribe(data => {
      data.forEach(e => {
        if (e.courseID == cID) {
          e.reviews.forEach(r => {
            if(r.visibility == "public")
              this.reviews.push({
                user: r.user,
                timePosted: r.timePosted,
                review: r.review
              })
          })
        }
      })
    })
    console.log(this.reviews)
  }

  closeReviews() {
    this.showReview = false;
  }

}
