import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-all-outreach-circle',
  templateUrl: './all-outreach-circle.component.html',
  styleUrls: ['./all-outreach-circle.component.css']
})

export class AllOutreachCircleComponent implements OnInit {
  outercircleList : [];

  constructor(private dataService : DataService){

  }
  var = { input : {
    skip : 0,
    limit : 100,
    filter : {
    }
  }}

  fetching = true;
  ngOnInit(){
    console.log(this.dataService)
    this.dataService.getData(this.var).subscribe((val)=>{
      this.fetching = false
      this.outercircleList=val.data.outreachCirclesByLoggedInUser.items
    })
    
    
  }
  
}