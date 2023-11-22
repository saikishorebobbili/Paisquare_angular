import { Injectable } from '@angular/core';
import { Advertise, User,Contactus,Comments, Follower, Visited, Like, Profile } from './paisa';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable } from 'rxjs';
import {HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PaiService {
  userId: any;
  lastName: any;
  firstName: any;
  userName: any;
  constructor( private _http : HttpClient) { }

  public loginUserFromRemote(user: User ):Observable<any>{
     return this._http.post<any>("http://localhost:3300/login",user)
  }
  public registerUserFromRemote(user: User ):Observable<any>{
    return this._http.post<any>("http://localhost:3300/registeruser",user)
 }
  public advertiseFromRemote(advertise: Advertise,userid:Number):Observable<any>{
    return this._http.post<any>(`http://localhost:3300/${userid}/advertise`,advertise)
  }
  public ContactusFromRemote(contactus: Contactus):Observable<any>{
    return this._http.post<any>("http://localhost:3300/contactus",contactus)
  }
  public CommentsFromRemote(comments: Comments,advertisementid: Number,userid:Number):Observable<any>{
    return this._http.post<any>(`http://localhost:3300/${userid}/${advertisementid}/comments`,comments)
  }
  public getAllAdvertisements() {
    return this._http.get<any>(`http://localhost:3300/advertisements`);
  }
  public getAllCommentList(){
    return this._http.get<any>("http://localhost:3300/commentslist");
  }
  public getAllFollowersList(userId:Number){
    console.log("from service log__",userId)
    return this._http.get<any>(`http://localhost:3300/${userId}/followerslist`);
  }
  public CommentsListFromRemote(advertisementid: Number){
    return this._http.get<any>(`http://localhost:3300/${advertisementid}/commentslist`);
  }
  public FollowerFromRemote(follower:Follower,advertiserid: Number,userId:Number):Observable<any>{
    return this._http.post<any>(`http://localhost:3300/${userId}/${advertiserid}/follow`,follower)
  }
  public VisitedFromRemote(visited:Visited,userid:Number,advertiserid: Number):Observable<any>{
    return this._http.post<any>(`http://localhost:3300/${userid}/${advertiserid}/visit`,visited)
  }
  public LikeFromRemote(like:Like,userid:Number,advertisementid:Number):Observable<any>{
    return this._http.post<any>(`http://localhost:3300/${userid}/${advertisementid}/like`,like)
  }
  public ProfileUpdateFromRemote(profile:Profile,userId:Number):Observable<any>{
    return this._http.post<any>(`http://localhost:3300/${userId}/updateProfile`,profile)
  }
  public getProfileList(userId:Number) {
    return this._http.get<any>(`http://localhost:3300/${userId}/profile`);
  }
  public getIDAdvertisements(advertisementid:Number){
    return this._http.get<any>(`http://localhost:3300/${advertisementid}/idadvertisements`);
  }
  public getUserAdvertisements(userId:Number){
    return this._http.get<any>(`http://localhost:3300/${userId}/useradvertisements`);
  }
}

