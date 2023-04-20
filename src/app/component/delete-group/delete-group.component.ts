import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { CookieService } from 'ngx-cookie-service';
import { DeleteGroup } from 'src/app/graphql/graphql.mutation';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-delete-group',
  templateUrl: './delete-group.component.html',
  styleUrls: ['./delete-group.component.css']
})
export class DeleteGroupComponent implements OnInit {
  gId:string=''
    constructor(private service:DataService,
      private cookies:CookieService,
      private dataService:DataService,
      private apollo:Apollo) { }
  
    ngOnInit(): void {
       this.gId=this.service.getEditGroup().id
    }
    delete(){
  console.log("Delete ID",this.gId);
  
  this.apollo.mutate<any>({
      mutation : DeleteGroup ,
      variables :{
        id: this.gId
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
    

  
  
}
