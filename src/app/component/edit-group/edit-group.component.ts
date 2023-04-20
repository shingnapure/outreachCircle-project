import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { CookieService } from 'ngx-cookie-service';
import { EditGroup } from 'src/app/graphql/graphql.mutation';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.css']
})
export class EditGroupComponent implements OnInit {
gname:string=''
gId:string=''
  constructor(private service:DataService,
    private cookies:CookieService,
    private dataService:DataService,
    private apollo:Apollo) { }

  ngOnInit(): void {
    this.gname=this.service.getEditGroup().name
     this.gId=this.service.getEditGroup().id

    // console.log("Model",this.service.getEditGroup());
    
  }
  editGroup(){
    console.log("HREF",this.gname);

this.apollo.mutate<any>({
    mutation : EditGroup ,
    variables : {
      input: {
        id:  this.gId,
        name:  this.gname
      }
    },
    context: {
      headers: { Authorization: this.cookies.get(this.dataService.token) },
    }

  }).subscribe(
    (data) => {
      console.log("data updated",data);

    }
  )
  }
  
removeInputValue(){
  this.gname=''
}
}
