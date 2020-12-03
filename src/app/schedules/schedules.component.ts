import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { TimetableService } from '../timetable.service';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})

export class SchedulesComponent implements OnInit {
  // Global variables
  public schedules = [];
  public info = [];
  public x = [];
  public exist = [];
  public show: boolean;
  public showSB: boolean;
  public nameToUpdate;
  public name: string;

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

  reviewForm = new FormGroup({
    subject: new FormControl('',[
      Validators.required
    ]),
    course: new FormControl('',[
      Validators.required
    ]),
    review: new FormControl('',[
      Validators.required
    ]),
  });

  editForm =  new FormGroup({
    dataItems: this.fb.array([])
  });
  public dataItems = [];

  constructor(private timetableService: TimetableService, private firebaseService: FirebaseService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.firebaseService.getToken().then(res => {
      if(res) {
        this.timetableService.getPrivateSchedules(res)
        .subscribe(data => {
          this.name = data[0].user;
          data[0].schedules.forEach(e=> {
            this.schedules.push({
              sName: e.scheduleName,
              num: e.numCourses,
              vis: e.visibility,
              show: false,
            })
          })
        });
      }
    })
  }

  // Create a new schedule
  createSchedule() {
    const sched = this.scheduleForm.controls.schedule.value
    const desc = this.scheduleForm.controls.description.value
    let vis = this.scheduleForm.controls.visibility.value

    if (vis == '')
      vis = "false"

    this.firebaseService.getToken().then(res => {
      if(res) {
        this.timetableService.createSchedule(res,sched,desc,vis).subscribe(data => {
          if (data) {
            alert(`A schedule with the name "${sched}" was created`)
            window.location.reload();
          }
        })
      }
    })
  }

  updateSchedule() {
    const sched = this.editForm.controls.dataItems.value[0].schedule
    const desc = this.editForm.controls.dataItems.value[0].description
    let vis = this.editForm.controls.dataItems.value[0].visibility

    this.firebaseService.getToken().then(res => {
      if(res) {
        this.timetableService.updateSchedule(res,sched,desc,vis,this.nameToUpdate).subscribe(data => {
          alert('Update successful')
          window.location.reload();
        })
      }
    })
  }

  // Get the list of subject code, course code pairs for a given schedule
  viewSchedule(schedule: string) {
    this.x = [];

    this.firebaseService.getToken().then(res => {
      if(res) {
        this.timetableService.viewSchedule(res,schedule).subscribe(data => {
          data[0].schedules[0].courses.forEach(e=> {
            this.exist.push(e.courseInfo[0].classNum)
            this.x.push(e)
          });
    
          this.showSB = true;
        });
      }
    })
  }

  // Delete a schedule with a given name
  deleteOne(schedule: string) {
    if(confirm(`Are you sure you want to delete the schedule "${schedule}"?`)) {
      this.firebaseService.getToken().then(res => {
        if(res) {
          this.timetableService.deleteOne(res,schedule).subscribe(data => {
            alert(data.message);
            window.location.reload()
          });
        }
      })
    }
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
    const sch = this.scheduleName.value

    this.firebaseService.getToken().then(res => {
      if(res) {
        this.timetableService.saveSchedule(res,sch,this.x).subscribe(data => {
          alert(`Schedule ${sch} has been built`)
          window.location.reload()
        })
      }
    })
  }

  edit(schedule: string, show: boolean) {
    let vis;
    show = !show;
    this.show = true;
    this.nameToUpdate = schedule;

    this.firebaseService.getToken().then(res => {
      if(res) {
        this.timetableService.viewSchedule(res,schedule).subscribe(data => {
          if (data[0].schedules[0].visibility == "false") {
            vis = false;
          }
          else {
            vis = true;
          }
          this.dataItems = [
            {
              schedule: data[0].schedules[0].scheduleName,
              description: data[0].schedules[0].description,
              visibility: vis,
            }
          ];
          this.editForm = new FormGroup({
            dataItems: this.fb.array([])
          });
          this.editForm.setControl(
            "dataItems",
            this.setExistingItems(this.dataItems)
          );
          });
      }
    })
  }

  close() {
    this.show = false;
  }


  setExistingItems(items): FormArray {
    const formArray = new FormArray([]);
    items.forEach(s => {
      formArray.push(
        this.fb.group({
          schedule: s.schedule,
          description: s.description,
          visibility: s.visibility,
        })
      );
    });
    return formArray;
  }

  submitReview() {
    // Extract input values
    const sb = this.reviewForm.controls.subject.value.toUpperCase()
    const cc = this.reviewForm.controls.course.value.toUpperCase()
    const review = this.reviewForm.controls.review.value

    if(confirm(`Are you sure you want to post this review to ${sb} ${cc}?`)) {
      this.firebaseService.getToken().then(res => {
        if(res) {
          this.timetableService.writeReview(res,sb,cc,review).subscribe(data => {
            if (data) {
              alert('Review posted!')
              window.location.reload()
            }
          })
        }
      })
    }
  }
}
