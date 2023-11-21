import { Component , OnInit} from '@angular/core';
import { PaiService} from '../paisa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit{
  userId=' ';
  firstName=' ';
  lastName=' ';
  userName=' ';
  constructor(private _service: PaiService, private _router: Router){};
  ngOnInit() {
    this.userId=this._service.userId;
    this.firstName=this._service.firstName;
    this.lastName=this._service.lastName;
    this.userName=this._service.userName;
    console.log("userid",this.userId);
    console.log("firstname",this.firstName);
    console.log("lastname",this.lastName);
    console.log("username-->",this.userName,"-->",this._service.userName);
    if(!this.userId && !this.firstName && !this.lastName){
      this._router.navigate(['login'])
    }
  }
}
