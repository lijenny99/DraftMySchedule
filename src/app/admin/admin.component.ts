import { Component, OnInit } from '@angular/core';
import { TimetableService } from '../timetable.service';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { FirebaseService } from '../firebase.service';

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

  editForm =  new FormGroup({
    dataItems: this.fb.array([])
  });
  public dataItems = [];

  options = [
    {desc: 'Security and Privacy Policy'},
    {desc: 'DMCA Notice and Takedown Policy'},
    {desc: 'Acceptable Use Policy'}
  ]

  constructor(private timetableService: TimetableService, private firebaseService: FirebaseService, private fb: FormBuilder) { }


  dmcaForm = new FormGroup({
    policy: new FormControl(''),
  });

  ngOnInit(): void {
    this.firebaseService.getToken().then(res => {
      if(res) {
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
    })
  }

  toggleVisibility(courseID: string, reviewBody: string, vis : string) {
    if (vis == "hidden")
      vis = "public"
    else 
      vis = "hidden"
    this.firebaseService.getToken().then(res => {
      if(res) {
        this.timetableService.reviewVisibility(res, courseID, reviewBody, vis).subscribe(data => {
          alert(`Review visibility for ${courseID} was changed to ${vis}`)
          window.location.reload();
        })
      }
    })
  }

  adminAccess(email: string, access: string, status: string) {
    if (access == "admin")
      access = "regular"
    else
      access = "admin"

    this.firebaseService.getToken().then(res => {
      if(res) {
        this.timetableService.changeAccountSettings(res, email,access,status).subscribe(data => {
          alert(`Access priviledges for ${email} were changed to ${access}`)
          window.location.reload();
        })
      }
    })
  }

  accountStatus(email: string, access: string, status: string) {
    if (status == "active")
      status = "deactivated"
    else
      status = "active"
    this.firebaseService.getToken().then(res => {
      if(res) {
        this.timetableService.changeAccountSettings(res,email,access,status).subscribe(data => {
          alert(`Account status for ${email} was changed to ${status}`)
          window.location.reload();
        })
      }
    })
  }

  submitPolicy() {
    const policy = this.dmcaForm.controls.policy.value
    const text = this.editForm.controls.dataItems.value[0].text
    
    this.firebaseService.getToken().then(res => {
      if(res) {
        this.timetableService.updatePolicy(res,policy,text).subscribe(data => {
          alert('Policy published!')
          window.location.reload();
        })
      }
    })
  }

  editPolicy(policy: string) {
    this.show = true;

    this.firebaseService.getToken().then(res => {
      if(res) {
        this.timetableService.viewPolicy(res,policy).subscribe(data => {
          if (data!=0) {
            this.dataItems = [
              { text: data[0].text,}
            ];
          }
            
          else {
            this.dataItems = [
              { text: ''}
            ];
          }
    
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

  setExistingItems(items): FormArray {
    const formArray = new FormArray([]);
    items.forEach(s => {
      formArray.push(
        this.fb.group({
          text: s.text,
        })
      );
    });
    return formArray;
  }

}
