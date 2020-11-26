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
  public subjects = [];
  public subjectCodes = [];
  public timetableInfo = [];

  // Toggle which content is displayed
  public displaySub;

  // Form input
  subjectsForm = new FormGroup({
    subject: new FormControl('',[
      Validators.required
    ]),
    course: new FormControl(''),
    component: new FormControl(''),
  });

  constructor(private timetableService: TimetableService) { }

  ngOnInit(): void {
  }

  // Get all available subject codes
  getSubjects() {
    this.timetableService.getSubjects()
    .subscribe(data => this.subjects = data);
    this.displaySub = 1;
  }

  // Search the time table by subject, subject+course or subject+course+component
  search() {
    // Extract input values
    const s = this.subjectsForm.controls.subject.value.toUpperCase()
    const cs = this.subjectsForm.controls.course.value.toUpperCase()
    const cp = this.subjectsForm.controls.component.value.toUpperCase()

    // Check if only subject was inputted
    if (s != null && cs == '' && cp == '') {
      this.timetableService.getSubject(s).subscribe(data => this.subjectCodes = data)
      this.displaySub = 2;
    }
    // Otherwise, all fields were inputted
    else {
      this.timetableService.getTimetableInfo(s, cs, cp).subscribe(data => this.timetableInfo = data)
      this.displaySub = 3;
    }
  }

}
