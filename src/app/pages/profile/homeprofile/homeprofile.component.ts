import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-homeprofile',
  templateUrl: './homeprofile.component.html',
  styleUrls: ['./homeprofile.component.css']
})
export class HomeprofileComponent implements OnInit {

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.auth.user$.subscribe(user=>{
      console.log(user)
    })
  }

}
