import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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

  // Toggle which content is displayed
  public displaySched;

  // Form input
  schedule = new FormControl('',[
    Validators.required
  ])

  constructor(private timetableService: TimetableService) { }

  ngOnInit(): void {
  }

  // Create a new schedule
  createSchedule(schedule: string) {
    this.timetableService.createSchedule(schedule).subscribe(data => {
      alert(`A schedule with the name "${data[0].scheduleName}" was created`);
      window.location.reload();
    })
  }

  // Get the list of subject code, course code pairs for a given schedule
  viewSchedule(schedule: string) {
    this.timetableService.viewSchedule(schedule).subscribe(data => {
      this.scheduleTimetable = data;
      // Check if there are courses in the schedule
      if (Object.keys(data).length == 0) {
        alert(`There are no courses in schedule "${schedule}"`)
      }
    });
    this.displaySched = 1;
  }

  // Delete a schedule with a given name
  deleteOne(schedule: string) {
    this.timetableService.deleteOne(schedule).subscribe(data => {
      alert(data.message);
      window.location.reload()
    });
  }

  // Get a list of schedule names and the number of courses that are saved in each schedule
  getSchedules() {
    this.timetableService.getSchedules()
    .subscribe(data => this.schedules = data);
    this.displaySched = 2;
  }

  // Delete all schedules
  deleteAll() {
    this.timetableService.deleteAll().subscribe(data => {
      alert(data.message);
      window.location.reload();
    });
  }
}
