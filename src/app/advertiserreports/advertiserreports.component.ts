import { Component, OnInit } from '@angular/core';
import { PaiService } from '../paisa.service';
import {HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advertiserreports',
  templateUrl: './advertiserreports.component.html',
  styleUrls: ['./advertiserreports.component.css']
})
export class AdvertiserreportsComponent implements OnInit{
  data: any;

  options: any;
  constructor(private _service: PaiService,private http: HttpClient,private _router: Router) {
       
  }
  ngOnInit() {
    

      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      this.data = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
              {
                  label: 'First Dataset',
                  data: [65, 59, 80, 81, 56, 55, 40],
                  fill: false,
                  borderColor: documentStyle.getPropertyValue('--blue-500'),
                  tension: 0.4
              }
          ]
      };

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
