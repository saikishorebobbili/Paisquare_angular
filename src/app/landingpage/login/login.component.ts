import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { User } from '../../paisa';
import { PaiService } from '../../paisa.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user= new User();
  message=''
  constructor(private _service: PaiService, private _router: Router){};
  text=''
  userLogin(){
    if(this.user.email!='' && this.user.password!=''){
      this._service.loginUserFromRemote(this.user).subscribe(
        data=>{
        console.log("Response received");
        this._service.userId=data.id;
        this._service.firstName=data.firstname;
        this._service.lastName=data.lastname;
        this._service.userName=data.username;
        console.log("in login button page clicked")
        //this._router.navigate(['advertiser'])
        this._router.navigate(['/home/profileupdate'])
      },
        error=>{console.log("Error occured");
        this.message="Invalid email and password";
      }
      )
    }
    else{
      this.message="password and email must required";
    }
  }
}
