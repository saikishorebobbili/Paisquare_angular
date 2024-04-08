import { Component , OnInit, ViewChild } from '@angular/core';
import { PaiService} from '../paisa.service';
import { Router } from '@angular/router';
import { Sidebar } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import {HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit{
  nodes!: TreeNode[];
  constructor(private _service: PaiService,private http: HttpClient,private _router: Router,private _route: ActivatedRoute) {
       
  }
  advertisements:any[]=[];
  userAdvertisementslist: any[]=[];
  blockedAdvertisementslist: any[]=[];
  followingAdvertisementslist: any[]=[];
  followerslist: any[] = [];
  userData: any[] = [];
  blockedlist: any[]=[];
  favouriteslist: any[]=[];
  userId='';
  
  sidebarVisible: boolean = false;
  sidebarVisible1:boolean=true;
  firstName=' ';
  lastName=' ';
  userName=' ';
    ngOnInit() {
      
      this.userId=this._service.userId;
      this.firstName=this._service.firstName;
      this.lastName=this._service.lastName;
      this.userName=this._service.userName;
      if(!this.userId && !this.firstName && !this.lastName){
        this._router.navigate(['login'])
      }
      //drop down user and advertiser list
      this.nodes = [
          {
              key: '0',
              label: 'User',
              children: [
                  { key: '0-0', label: 'Dashboard', data: 'userdashboard', type: 'url',icon:'pi pi-home'},
                  { key: '0-1', label: 'Your activities', data: 'useractivities', type: 'url',icon:'pi pi-chart-line'},
                  { key: '0-3', label: 'Withdraw', data: 'withdraw', type: 'url',icon:'pi-cart-plus'}
              ]
          },
          {
              key: '1',
              label: 'Advertiser',
              children: [
                  { key: '1-0', label: 'Dashboard', data: 'advertiserdashboard', type: 'url',icon:'pi pi-home' },
                  { key: '1-1', label: 'Report', data: 'advertiserreport', type: 'url' ,icon:'pi pi-chart-bar'},
                  { key: '1-2', label: 'My Advertisment', data: "['/myadvertisement', userId]", type: 'url',icon:'pi pi-folder' },
                  { key: '1-3', label: 'Advertise', data: 'advertisementform', type: 'url',icon:'pi pi-plus' }
              ]
          }
      ];
    }
    advertiserdashboardComponent:Boolean=false;
    advertiserreportComponent:Boolean=false;
    useractivitiesComponent:Boolean=false;
    userdashboardComponent:Boolean=false;
    userwithdrawComponent:Boolean=false;
    displayadvertisementformComponent:boolean=false;
    componentViewMethod(val:String){
      console.log(val)
      this.advertiserdashboardComponent=false;
      this.advertiserreportComponent=false;
      this.useractivitiesComponent=false;
      this.userdashboardComponent=false;
      this.userwithdrawComponent=false;
      this.displayadvertisementformComponent=false;
      if(val==="advertisementform"){
        this.displayadvertisementformComponent=true;
      }
      else if(val==="advertiserdashboard") {
        this.advertiserdashboardComponent=true;
      } 
      else if(val==="advertiserreport") {
        this.advertiserreportComponent=true;
      } 
      else if(val==="userdashboard") {
        this.userdashboardComponent=true;
      } 
      else if(val==="useractivities") {
        this.useractivitiesComponent=true;
      } 
      else if(val==="userwithdrawComponent") {
        this.userwithdrawComponent=true;
      } 
      else if(val==="advertiserdashboard") {
        this.advertiserdashboardComponent=true;
      } else {
        
      }
      console.log(this.advertiserdashboardComponent)
      console.log(this.advertiserreportComponent)
      console.log(this.useractivitiesComponent)
      console.log(this.userdashboardComponent)
      console.log(this.userwithdrawComponent)
  }

}
