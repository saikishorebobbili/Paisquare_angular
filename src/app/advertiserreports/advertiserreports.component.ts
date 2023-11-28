import { Component, OnInit } from '@angular/core';
import { PaiService } from '../paisa.service';
import {HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Advertise } from '../paisa';

@Component({
  selector: 'app-advertiserreports',
  templateUrl: './advertiserreports.component.html',
  styleUrls: ['./advertiserreports.component.css']
})
export class AdvertiserreportsComponent implements OnInit{
  visitors:any;
  followers:any;
  likes:any;
  favourite:any;
  options: any;
  constructor(private _service: PaiService,private http: HttpClient,private _router: Router) {
       
}
VisitorsLabels:any[]=[];
VisitorsData:any[]=[];
likesLabels:any[]=[];
likesData:any[]=[];
followersLabels:any[]=[];
followersData:any[]=[];
favouriteLabels:any[]=[];
favouriteData:any[]=[];
ngOnInit() {
    this._service.getFavouriteGraphFromRemote(this._service.userId).subscribe(
        data=>{
            console.log("Favourite data",data);
            data.forEach((obj: any) => {
                this.favouriteLabels.push(obj[0])
                this.favouriteData.push(obj[1])
              });
            console.log(this.favouriteLabels)
            console.log(this.favouriteData)
            this.favourite = {
                labels: this.favouriteLabels,
                datasets: [
                    {
                        label: 'favourite',
                        data: this.favouriteData,
                        fill: false,
                        borderColor: documentStyle.getPropertyValue('--blue-500'),
                        tension: 0.4
                    }
                ]
            };
    
        },
        error=>{
            console.log("likes graph from error occured!");
        });
    this._service.getLikeGraphFromRemote(this._service.userId).subscribe(
        data=>{
            console.log("like data",data);
            data.forEach((obj: any) => {
                this.likesLabels.push(obj[0])
                this.likesData.push(obj[1])
              });
            console.log(this.likesLabels)
            console.log(this.likesData)
            this.likes= {
                labels: this.likesLabels,
                datasets: [
                    {
                        label: 'Likes',
                        data: this.likesData,
                        fill: false,
                        borderColor: documentStyle.getPropertyValue('--blue-500'),
                        tension: 0.4
                    }
                ]
            };
    
        },
        error=>{
            console.log("likes graph from error occured!");
        });
    this._service.getVisitorGraphFromRemote(this._service.userId).subscribe(
        data=>{
            console.log("visitor data",data);
            data.forEach((obj: any) => {
                this.VisitorsLabels.push(obj[0])
                this.VisitorsData.push(obj[1])
              });
            console.log(this.VisitorsLabels)
            console.log(this.VisitorsData)
            this.visitors = {
                labels: this.VisitorsLabels,
                datasets: [
                    {
                        label: 'Visitors',
                        data: this.VisitorsData,
                        fill: false,
                        borderColor: documentStyle.getPropertyValue('--blue-500'),
                        tension: 0.4
                    }
                ]
            };
    
        },
        error=>{
            console.log("visitor graph from error occured!");
        });

    this._service.getFollowersGraphFromRemote(this._service.userId).subscribe(
        data=>{
            console.log("followers data",data);
            data.forEach((obj: any) => {
                this.followersLabels.push(obj[0])
                this.followersData.push(obj[1])
                });
            console.log(this.followersLabels)
            console.log(this.followersData)
            this.followers = {
                labels: this.followersLabels,
                datasets: [
                    {
                        label: 'Followers',
                        data: this.followersData,
                        fill: false,
                        borderColor: documentStyle.getPropertyValue('--blue-500'),
                        tension: 0.4
                    }
                ]
            };
        },
        error=>{
            console.log("visitor graph from error occured!");
        }
        );
    

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.options = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
    };
    
}
}
