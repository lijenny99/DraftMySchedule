import { Component, OnInit, Input } from '@angular/core';
import { TimetableService } from '../timetable.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-schedule-builder',
  templateUrl: './schedule-builder.component.html',
  styleUrls: ['./schedule-builder.component.css']
})
export class ScheduleBuilderComponent implements OnInit {
  // Global variables
  public info = [];
  public x = [];
  public exist = [];

  // Form input
  scheduleBuilderForm = new FormGroup({
    schedule: new FormControl('',[
      Validators.required
    ]),
    sub: new FormControl('',[
      Validators.required
    ]),
    courseCode: new FormControl('',[
      Validators.required
    ]),
  });

  constructor(private timetableService: TimetableService) { }

  ngOnInit(): void {
  }

  // Add course to schedule builder
  addCourse() {
    // Extract input values
    const sb = this.scheduleBuilderForm.controls.sub.value.toUpperCase()
    const cc = this.scheduleBuilderForm.controls.courseCode.value.toUpperCase()

    this.timetableService.getTimetableInfo(sb,cc).subscribe( data => {
      this.info = data;
      // If subject+course combo exists
      if (data != undefined) { 
        // Course does not already exists in draft
        if (!this.exist.find(e => e == this.info[0].classNum)) {
          this.x.push({"subject": sb, "course": cc, "courseInfo": this.info});
          this.exist.push(this.info[0].classNum);
        }
        // Course exists
        else {
          alert('Cannot add duplicate courses!')
        }
      }
    })
    
  }

  // Delete course in schedule builder
  deleteCourse(i: string, j: string) : void {
    this.x = this.x.filter(e => e !== i);
    this.exist = this.exist.filter(e => e !== j)
  }

  // Save a list of subject code, course code pairs under a given schedule name
  saveSchedule() {
    const sch = this.scheduleBuilderForm.controls.schedule.value
    this.timetableService.saveSchedule(sch,this.x).subscribe(data => {
      alert(`Schedule ${data.scheduleName} has been built`)
      window.location.reload()
    })
  }

}
