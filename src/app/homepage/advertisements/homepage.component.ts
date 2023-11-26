import { Component, OnInit } from '@angular/core';
import { PaiService } from '../../paisa.service';
import {HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Comments,Follower,Visited,Like, Block, Report,Favourite } from '../../paisa';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  options = [
    { id: 'radio1', label: 'Violent', value: 'violent' },
    { id: 'radio2', label: 'Hateful', value: 'Hateful' },
    { id: 'radio3', label: 'Harassment', value: 'Harassment' },
    { id: 'radio4', label: 'harmful', value: 'harmful' },
    { id: 'radio5', label: 'Misinformation', value: 'Misinformation' },
    { id: 'radio6', label: 'Child Abuse', value: 'Child Abuse' },
    { id: 'radio7', label: 'Spam/ Misleading', value: 'Spam/ Misleading' }
  ];
  advertisements: any[] = [];
  advertisementsListById: any[] = [];
  comments: any[] = [];
  followersuseridlist: any[]=[];
  followerslist: any[] = [];
  userData: any[] = [];
  blockedlist: any[]=[];
  favouriteslist: any[]=[];
  commentobj= new Comments();
  followerobj= new Follower();
  visitobj=new Visited();
  blockobj=new Block();
  favouriteobj=new Favourite();
  message=''
  showComments=''
  currentOpenId: any;
  following:any;
  advertisementid:any=0;
  constructor(private _service: PaiService,private http: HttpClient,private _router: Router,private _route: ActivatedRoute) {
       
  }
  userId=' ';
  displayDialog: boolean = false;

  showDialog() {
    this.displayDialog = true;
  }
  ngOnInit(){
    this._route.params.subscribe(params => {
      const adId = params['id']; // Access ad ID from URL if provided
      const userId = params['userId']; // Access user ID from URL if provided
  
      if (adId) {
        // Fetch and display specific ad by ID
        this._service.getIDAdvertisements(adId).subscribe(
          data => {
            this.userId=this._service.userId;
            this.advertisements = data;
            console.log("advertisment list for id: ",adId,this.advertisements)
          },
            error=>{console.log("error occure while retrieving the data for ID -",adId)
        });
      } else if (userId) {
        // Fetch and display ads by user
        this._service.getUserAdvertisements(userId).subscribe(
          data => {
            this.userId=this._service.userId;
            this.advertisements = data;
            console.log("advertisment list for userId: ",adId,this.advertisements)
          },
            error=>{console.log("error occure while retrieving the data for userId -",userId)
        });
      } else {
        this.fetchadvertisement()
      }
    });
    this.userId=this._service.userId;
    this.fetchUserData();
  }
  fetchUserData(){
    this._service.getUserdata(+this.userId).subscribe(
      data =>{
        console.log("console.log(this._service.userId)",this.userId)
        this.userData=data;
        console.log("fromfollower--->",data,"------->",this.followerslist);
        data.forEach((user: any) => {
          this.followerslist=user.following;
          this.blockedlist=user.blocked;
          this.favouriteslist=user.favourites;
          console.log("user data from fetch user data-->")
          console.log("user data from fetch user data-(data->",user);
          console.log("followerslist",this.followerslist)
          console.log("blockedlist",this.blockedlist)
          console.log("favouriteslist",this.favouriteslist)
          // Perform operations with follower.username or other properties here
        });
      },
      error=>{
        console.log("error occured in followerslist")
      }
    );
  }
  fetchadvertisement(){
    this.advertisementid=0;
    this._service.getAllAdvertisements().subscribe(
      data => {
      this.userId=this._service.userId;
      console.log("all advertisment list:",data)
      this.advertisements = data;
      console.log("all advertisment list:",this.advertisements)
    },
      error=>{console.log("error occure while retrieving the data!")
    });
  }

  selectedOption='';
  selectOptionText='';
  reportobj=new Report();
  reportmessage='';
  Reportadvertisement(advertisementId:Number) {
    console.log('Selected option:', this.selectedOption);
    console.log('Selected option:', this.selectOptionText);
    this.reportobj.advertisementid=advertisementId;
    this.reportobj.userid=this.userId;
    if(this.selectedOption==='none')
      this.reportobj.reportedtext=this.selectOptionText;
    else
      this.reportobj.reportedtext=this.selectedOption;
    if(this.reportobj.reportedtext!==''){
      console.log("reportedText",this.reportobj.reportedtext)
      this._service.postReportadvertisement(this.reportobj).subscribe(
        data=>{
          console.log("reported successfully",data);
          this.fetchUserData()
        },
        error=>{
          console.log("error occured while reporting");
        }
      )
    }
    else{
      this.reportmessage="Select correct option";
    }
    this.selectedOption='';
    this.selectOptionText='';
    
  }


  likeobj=new Like();
  like(advertisementid:Number){
    this.likeobj.advertisementid=advertisementid;
    this.likeobj.userid=this.userId;
    this._service.LikeFromRemote(this.likeobj,+this.userId,advertisementid).subscribe(
      data=>{
        console.log("Like recieved")
        this.fetchadvertisement()
        this._router.navigate(['homepage'])
      },
      error=>{
        console.log("like error occured")
      }
    )
  }
  visited(advertisementid:Number,advertisementurl:String){
    this.visitobj.userid=this.userId;
    this.visitobj.advertisementid=advertisementid;
    this.visitobj.visited=true;
    this._service.VisitedFromRemote(this.visitobj,+this.userId,advertisementid).subscribe(
      data=>{
        console.log("visited received")
        this.fetchadvertisement()
        this._router.navigate(['homepage'])
      },
      error=>{
        console.log("visited error occured")
      }
    )
  }
  block(advertiserid: number){
    this.blockobj.userid=this._service.userId;
    this.blockobj.advertiserid=advertiserid;
    this.blockobj.Blocked=true;
    this._service.postBlockAdvertiser(this.blockobj,this._service.userId,advertiserid).subscribe(
      data=>{
        console.log("blocked successfully")
        this.fetchUserData()
      },
      error=>{
        console.log("error occured while blocking advertiser")
      }
    )
  }
  favourite(advertisementid: number){
    this.favouriteobj.userid=this._service.userId;
    this.favouriteobj.advertisementid=advertisementid;
    this.favouriteobj.saved=true;
    this._service.postfavouriteAdvertisement(this.favouriteobj,this._service.userId,advertisementid).subscribe(
      data=>{
        console.log("advertisement added favourites successfully")
        this.fetchUserData()
      },
      error=>{
        console.log("error occured while adding advertisement added favourites")
      }
    )
  }
 
  follower(advertiserid: number){
    this.followerobj.userid=this.userId;
    this.followerobj.advertiserid=advertiserid;
    this.followerobj.following=true;
    this._service.FollowerFromRemote(this.followerobj,advertiserid,+this.userId).subscribe(
      data=>{
        console.log("follower updated");
        this.fetchUserData()
        this._router.navigate(['homepage'])
      },
      error=>{
        console.log("error occured for following");
      }
    )
  }
  comment(val:Number){
    this.commentobj.userid=this.userId;
    this.commentobj.advertisementid=val;
    this.commentobj.adid=val;
    console.log("----",this.commentobj);
    this._service.CommentsFromRemote(this.commentobj,val,+this.userId).subscribe(
      data=>{
      console.log("Response received");
      this.fetchadvertisement()
      this._router.navigate(['homepage'])
    },
      error=>{console.log("Error occured");
    }
    )
  }
  commentlist(advertisementid:Number){
    if (this.currentOpenId === advertisementid) {
    this.currentOpenId = null;
  } else {
    this.currentOpenId = advertisementid;
  }
    this.comments = [];
    this._service.CommentsListFromRemote(advertisementid).subscribe(
      data=>{
        this.comments=data;
        console.log("Response received------------>",this.comments);
      this._router.navigate(['homepage'])
    },
      error=>{console.log("Error occured");
    }
    )
  }
  Shareadvertisement(advertisementid:Number){
    this._service.getAllAdvertisements().subscribe(
      data=>{
        console.log("advertisement by id",data)
        data.forEach((advertisement: any) => {
          console.log("brandname brandname:", advertisement.brandname);
          const title = advertisement.brandname;
          const text = advertisement.description;
          console.log("data.brandname",advertisement.description)
          const url = advertisement.url;
          console.log("data.brandname",advertisement.url)
          this.share(title, text, url);
        });
      },
      error=>{
        console.log("Error occured");
      }
    )
  }
  async share(title: string, text: string, url: string) {
    try {
      if (navigator.share) {
        await navigator.share({ title, text, url });
        console.log('Shared successfully');
      } else {
        console.log('Web Share API not supported');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  }

  profile(advertiserid:Number){
    this._router.navigate(['profile',this._service.userId])
  }



}
