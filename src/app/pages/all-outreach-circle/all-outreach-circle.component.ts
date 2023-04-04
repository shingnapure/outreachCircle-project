import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { landing } from 'src/app/graphql/userByToken.query';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-all-outreach-circle',
  templateUrl: './all-outreach-circle.component.html',
  styleUrls: ['./all-outreach-circle.component.css']
})

export class AllOutreachCircleComponent implements OnInit {
  outercircleList : [];

  constructor(private dataService : DataService , private cookies : CookieService){

  }
  val = { input : {
    skip : 0,
    limit : 100,
    filter : {
    }
  }}

  fetching = true;
  ngOnInit(){
    
    this.dataService.getData(landing , this.val , {
      headers: {Authorization: this.cookies.get('_vc_token')}
    }).subscribe((val)=>{
      this.fetching = false
      this.outercircleList=val.data.outreachCirclesByLoggedInUser.items
    })
    
    
  }
  
}