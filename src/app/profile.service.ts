import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
userProfile: object = {
  name:"Mitchy Mouse",
  contact:"mitch@grantchirpus.co",
  bio:"I love Disney"
}
  constructor(private router: Router) { }
  
  editProfile(){
    this.router.navigate(["edit"]);
  }
  setUserProfile(userProfile){
    this.userProfile = userProfile;
    this.router.navigate(["profile"]);
  }
  getUserProfile():object{
    return this.userProfile;
  }


}
