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
    
    if (s) {
      this.timetableService.getTimetableInfo(s, cs).subscribe(data => this.timetableInfo = data)
    }
    else {
      this.timetableService.getKeywordInfo(key).subscribe(data => this.timetableInfo = data)
    }
  }

  viewDetails(subject) {
    subject.show = !subject.show;
  }
}
