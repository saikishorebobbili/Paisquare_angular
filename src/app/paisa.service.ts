import { Injectable } from '@angular/core';
import { Advertise, User,Contactus,Comments, Follower, Visited, Like, Profile,Favourite, Block, Report } from './paisa';
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
  public getUserdata(userId:Number){
    return this._http.get<any>(`http://localhost:3300/${userId}/userdata`);
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
  public getUserFollowingProfiles(userId:number){
    return this._http.get<any>(`http://localhost:3300/${userId}/UserFollowingProfiles`);
  }
  public getUserBlockedProfiles(userId:number){
    return this._http.get<any>(`http://localhost:3300/${userId}/UserBlockedProfiles`);
  }
  public postBlockAdvertiser(block:Block,userid:Number,advertiserId:Number){
    return this._http.post<any>(`http://localhost:3300/${userid}/${advertiserId}/blockadvertiser`,block);
  }
  public postReportadvertisement(report:Report){
    return this._http.post<any>(`http://localhost:3300/reportadvertisement`,report);
  }
  public postfavouriteAdvertisement(favourite:Favourite,userid:Number,advertisementid:Number){
    return this._http.post<any>(`http://localhost:3300/${userid}/${advertisementid}/addAdvetisementToFavourite`,favourite);
  }
  //Data for graphs
  public getVisitorGraphFromRemote(userId:Number,reportperiod:String){
    return this._http.get<any>(`http://localhost:3300/${userId}/${reportperiod}/visitorgraph`);
  }
  public getFollowersGraphFromRemote(userId:Number,reportperiod:String){
    return this._http.get<any>(`http://localhost:3300/${userId}/${reportperiod}/followersgraph`);
  }
  public getLikeGraphFromRemote(userId:Number,reportperiod:String){
    return this._http.get<any>(`http://localhost:3300/${userId}/${reportperiod}/likesgraph`);
  }
  public getFavouriteGraphFromRemote(userId:Number,reportperiod:String){
    return this._http.get<any>(`http://localhost:3300/${userId}/${reportperiod}/favouritegraph`);
  }
  //------------------For userdashboard----------------
  public getFavouriteAdvertisements(){
    return this._http.get<any>(`http://localhost:3300/${this.userId}/getfavouriteadvertisementslist`);
  }
  public getLikedAdvertisements(){
    return this._http.get<any>(`http://localhost:3300/${this.userId}/getlikedadvertisementslist`);
  }
  public getFollowingAdvertisements(){
    return this._http.get<any>(`http://localhost:3300/${this.userId}/getfollowingadvertisementslist`);
  }
  public getBlockedAdvertisements(){
    return this._http.get<any>(`http://localhost:3300/${this.userId}/getUserBlockedAdvertisementsList`);
  }
  public getVisitedAdvertisements(){
    return this._http.get<any>(`http://localhost:3300/${this.userId}/getvisitedadvertisementslist`);
  }


  public getAdvertisementTransactionData(){
    return this._http.get<any>(`http://localhost:3300/${this.userId}/getadvertisementtransactiondata`);
  }
}

