import { Component, OnInit } from '@angular/core';
import { TimetableService } from '../timetable.service';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public activeUsers = []
  public adminUsers = []
  public deactivatedUsers = []
  public reviews = []
  public show: boolean;

  options = [
    {desc: 'Security and Privacy Policy'},
    {desc: 'DMCA Notice and Takedown Policy'},
    {desc: 'Acceptable Use Policy'}
  ]

  constructor(private timetableService: TimetableService) { }


  dmcaForm = new FormGroup({
    policy: new FormControl(''),
    text: new FormControl(''),
  });

  ngOnInit(): void {
    this.timetableService.getPublicSchedules().subscribe(data => {
      data.forEach(e => {
        if (e.accountStatus == "active") {
          if (e.access == "regular") {
            this.activeUsers.push(e)
          } 
          else {
            this.adminUsers.push(e)
          }
        }
        else {
          this.deactivatedUsers.push(e)
        }
      })
    })

    this.timetableService.getReviews().subscribe(data => {
      data.forEach(e => {
        e.reviews.forEach(p => {
          this.reviews.push({
            course: e.courseID,
            vis: p.visibility,
            text: p.review
          })
        })
      })
    })
  }

  toggleVisibility(courseID: string, reviewBody: string, vis : string) {
    if (vis == "hidden")
      vis = "public"
    else 
      vis = "hidden"
    this.timetableService.reviewVisibility(courseID, reviewBody, vis).subscribe(data => {
      alert(`Review visibility for ${courseID} was changed to ${vis}`)
      window.location.reload();
    })
  }

  adminAccess(email: string, access: string, status: string) {
    if (access == "admin")
      access = "regular"
    else
      access = "admin"
    this.timetableService.changeAccountSettings(email,access,status).subscribe(data => {
      alert(`Access priviledges for ${email} were changed to ${access}`)
      window.location.reload();
    })
  }

  accountStatus(email: string, access: string, status: string) {
    if (status == "active")
      status = "deactivated"
    else
      status = "active"
    this.timetableService.changeAccountSettings(email,access,status).subscribe(data => {
      alert(`Account status for ${email} was changed to ${status}`)
      window.location.reload();
    })
  }

  policy() {
    const policy = this.dmcaForm.controls.policy.value
    const text = this.dmcaForm.controls.text.value
    this.timetableService.updatePolicy(policy,text).subscribe(data => alert('Policy published!'))
  }

  toggleDisplay(value: string) {
    console.log(value)
    // this.show = !this.show
    console.log('text')
  }

}
