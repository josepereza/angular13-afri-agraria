import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-homeprofile',
  templateUrl: './homeprofile.component.html',
  styleUrls: ['./homeprofile.component.css']
})
export class HomeprofileComponent implements OnInit {

  constructor(public auth: AuthService, public profileService:ProfileService) {}
profile$!:Observable<any>
  ngOnInit(): void {
    this.auth.user$.subscribe(user=>{
      console.log(user)
     this.profile$=this.profileService.getProfile(user?.email!);
         
    
    })
  }

}
