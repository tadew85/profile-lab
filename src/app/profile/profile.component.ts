import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userProfile: object;
  constructor(private service: ProfileService, private router: Router) { }

  ngOnInit() {
    this.userProfile = this.service.getUserProfile();
  }
  editProfile(){
    this.router.navigate(["edit-profile"]);
    this.service.editProfile();
  }
}
