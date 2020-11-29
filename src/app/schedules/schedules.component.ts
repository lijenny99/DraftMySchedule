import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { takeWhile } from 'rxjs/operators';
import { TimetableService } from '../timetable.service';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})

export class SchedulesComponent implements OnInit {
  // Global variables
  public schedules = [];
  public scheduleTimetable = [];
  public info = [];
  public x = [];
  public exist = [];
  public show: boolean;
  public showSB: boolean;

  // Form input
  scheduleName = new FormControl('',[
    Validators.required
  ])


  scheduleForm = new FormGroup({
    schedule: new FormControl('',[
      Validators.required
    ]),
    description: new FormControl(''),
    visibility: new FormControl('')
  });

  scheduleBuilderForm = new FormGroup({
    sub: new FormControl('',[
      Validators.required
    ]),
    courseCode: new FormControl('',[
      Validators.required
    ]),
  });

  constructor(private timetableService: TimetableService) { }

  ngOnInit(): void {
    this.timetableService.getSchedules()
    .subscribe(data => {
      data[0].schedules.forEach(e=> {
        this.schedules.push({
          sName: e.scheduleName,
          num: e.numCourses,
          vis: e.visibility,
        })
      })
    });
  }

  // Create a new schedule
  createSchedule() {
    const sched = this.scheduleForm.controls.schedule.value
    const desc = this.scheduleForm.controls.description.value
    let vis = this.scheduleForm.controls.visibility.value

    if (vis == '')
      vis = 'false'

    this.timetableService.createSchedule(sched,desc,vis).subscribe(data => {
      alert(`A schedule with the name "${sched}" was created`)
      window.location.reload();
    })
  }

  // Get the list of subject code, course code pairs for a given schedule
  viewSchedule(schedule: string) {
    this.x = [];
    this.timetableService.viewSchedule(schedule).subscribe(data => {
      data[0].schedules[0].courses.forEach(e=> {
        this.exist.push(e.courseInfo[0].classNum)
        this.x.push(e)
      });

      this.showSB = true;
    });
  }

  // Delete a schedule with a given name
  deleteOne(schedule: string) {
    this.timetableService.deleteOne(schedule).subscribe(data => {
      alert(data.message);
      window.location.reload()
    });
  }

  // // Delete all schedules
  // deleteAll() {
  //   this.timetableService.deleteAll().subscribe(data => {
  //     alert(data.message);
  //     window.location.reload();
  //   });
  // }

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
    const sch = this.scheduleName.value
    this.timetableService.saveSchedule(sch,this.x).subscribe(data => {
      alert(`Schedule ${sch} has been built`)
      window.location.reload()
    })
  }

  edit() {
    this.show = !this.show
  }

  view() {

  }
}
