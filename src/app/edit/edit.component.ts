import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
  }
  submitProfile(form:NgForm): void{
    let newProfile: ProfileService ={
      name: form.value.name,
      contact: form.value.contact,
      bio: form.value.bio
    };
    this.profileService.setUserProfile(newProfile);
  }
  // setUserProfile(){
  //   this.profileService.setUserProfile();
  // }
}
