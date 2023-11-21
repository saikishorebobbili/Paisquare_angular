import { Component } from '@angular/core';
import { Profile } from '../paisa';
import { Router } from '@angular/router';
import { PaiService } from '../paisa.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profile =new Profile()
  message=''
  userId=''
  username=''
  constructor(private _service: PaiService,private _router: Router) {}
  
  ngOnInit(){
    this.username=this._service.userName
    // loading profile data
    this._service.getProfileList(this._service.userId).subscribe(
      data =>{
        this.profile=data;
        console.log("profile data is:",this.profile);
      },
      error=>{
        console.log("error occured in followerslist")
      }
    );
  }
}
