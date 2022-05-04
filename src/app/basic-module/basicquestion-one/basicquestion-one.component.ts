import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicquestion-one',
  templateUrl: './basicquestion-one.component.html',
  styleUrls: ['./basicquestion-one.component.css']
})
export class BasicquestionOneComponent implements OnInit {

  public selectedDay: any;
  public Monday: any;
  public Tuesday: any;
  public Wednesday: any;
  public Thursday: any;
  public Friday: any;
  public Saturday: any;
  public week = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  constructor() { }

  ngOnInit(): void {
    var dayName = this.week[new Date().getDay()-1];
    this.selectedDay = dayName
    this.Monday = false;
    this.Tuesday = false;
    this.Wednesday = false;
    this.Thursday = false;
    this.Friday = false;
    this.Saturday = false;
    this.fnChangeDay()
  }
  fnChangeDay(): void {

    // if (this.selectedDay=="Monday"){
    //   this.Monday=true;
    // }
    this.Monday = false;
    this.Tuesday = false;
    this.Wednesday = false;
    this.Thursday = false;
    this.Friday = false;
    this.Saturday = false;
    switch (this.selectedDay) {
      case 'Monday': {
        this.Monday = true;
        break;
      }
      case 'Tuesday': {
        this.Tuesday = true;
        break;
      }
      case 'Wednesday': {
        this.Wednesday = true;
        break;
      }
      case 'Thursday': {
        this.Thursday = true;
        break;
      }
      case 'Friday': {
        this.Friday = true;
        break;
      }
      case 'Saturday': {
        this.Saturday = true;
        break;
      }
      default: {
        //statements; 
        break;
      }
    }

  }

}
