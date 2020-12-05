import { Component, OnInit } from '@angular/core';
import { TimetableService } from '../timetable.service';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css']
})
export class CopyrightComponent implements OnInit {

  // Global variables
  public sp: string;
  public dmca: string;
  public aup: string

  constructor(private timetableService: TimetableService) { }

  ngOnInit(): void {
    // Populate page
    this.timetableService.viewAllPolicies().subscribe(data => {
      data.forEach(e => {
        if (e.name == "Security and Privacy Policy")
          this.sp = e.text
        else if (e.name == "DMCA Notice and Takedown Policy")
          this.dmca = e.text
        else
          this.aup = e.text
      })
    })
  }

}
