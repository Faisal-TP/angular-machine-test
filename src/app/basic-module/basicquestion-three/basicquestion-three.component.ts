import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicquestion-three',
  templateUrl: './basicquestion-three.component.html',
  styleUrls: ['./basicquestion-three.component.css']
})
export class BasicquestionThreeComponent implements OnInit {

  // public Data:any={};
  public students:any=[];

  constructor() { }

  ngOnInit(): void {
  }

  addStudents(values:any):void{
    this.students.push(values.value)
  }
  removeIem(index:any):void{
    this.students.splice(index,1)
  }
  clearAll():void{
    this.students=[];
  }

}
