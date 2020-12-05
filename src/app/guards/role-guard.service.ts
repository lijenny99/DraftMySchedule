import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { FirebaseService } from '../firebase.service';


@Injectable({
  providedIn: 'root'
})
export class RoleGuardService {

  constructor(private firebaseService: FirebaseService, private router: Router) { }


  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.firebaseService.isAdmin) { // If user is admin, return true
      return true;
    } else { // Otherwise, reroute to schedule page
      this.router.navigate(['/schedule']);
      return false;
    }
  }
}
