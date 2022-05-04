import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicquestion-two',
  templateUrl: './basicquestion-two.component.html',
  styleUrls: ['./basicquestion-two.component.css']
})
export class BasicquestionTwoComponent implements OnInit {

  public students = [
    {"name":"Mark","sub-1":35,"sub-2":40,"sub-3":24,"sub-4":42,"sub-5":39},
    {"name":"Jacob","sub-1":30,"sub-2":22,"sub-3":36,"sub-4":36,"sub-5":45},
    {"name":"Ishak","sub-1":20,"sub-2":38,"sub-3":21,"sub-4":10,"sub-5":18},
    {"name":"Lisa","sub-1":45,"sub-2":45,"sub-3":10,"sub-4":44,"sub-5":48},
    {"name":"Manu","sub-1":19,"sub-2":20,"sub-3":20,"sub-4":18,"sub-5":29},
  ]
  public totalFlag: any;
  public totalText: any;
  public averageFlag : any;
  public averageText : any;
  public resultFlag : any;
  public resultText:any;

  constructor() { }

  ngOnInit(): void {
    this.totalFlag=false;
    this.totalText = "Show Total Mark";
    this.averageFlag=false;
    this.averageText = "Show Average Mark";
    this.resultFlag=false;
    this.resultText="Show Result Mark";


  }
  findTotalMark():void{
    this.totalFlag=!this.totalFlag;
    if(this.totalFlag){
      this.totalText = "Hide Total Mark";
    }else{
      this.totalText = "Show Total Mark";
    }
    
  }

  findAverageMark():void{
    this.averageFlag=!this.averageFlag;
    if(this.averageFlag){
      this.averageText = "Hide Average Mark";
    }else{
      this.averageText = "Show Average Mark";
    }
    
  }

  findResult():void{
    this.resultFlag=!this.resultFlag;
    if(this.resultFlag){
      this.resultText = "Hide Result Mark";
    }else{
      this.resultText = "Show Result Mark";
    }
    
  }

}
