import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { CookieService } from 'ngx-cookie-service';
import { individualGroup } from 'src/app/graphql/graphql.query';
import { DataService } from 'src/app/services/data.service';
import { IndividualGroupActionLink, groupdata } from 'src/app/services/interface';
@Component({
  selector: 'app-action-link-after-loading',
  templateUrl: './action-link-after-loading.component.html',
  styleUrls: ['./action-link-after-loading.component.css']
})
export class ActionLinkAfterLoadingComponent implements OnInit {
@Output() closeModal=new EventEmitter()
@Input() individualId:string
actionLinkLoading:boolean=false
groupValues:any=[]
arr=[1,2,3,4,5,6,7,8]
  constructor(
    private apollo:Apollo,private cookies:CookieService,private service:DataService
  ) { }
   
  ngOnInit(): void {
    console.log("individaulGroupId",this.individualId);
    this.actionLinkLoading=true
    this.individualGroup()
  }
  closeAction(value:boolean){
    this.closeModal.emit(value)
    console.log(value);
    
  }
  individualGroup(){
    this.actionLinkLoading=true
    this.apollo.query<IndividualGroupActionLink>({
      query:individualGroup,
      variables:{
        id: this.individualId
      },
      context: {
                 headers: { Authorization: this.cookies.get(this.service.token) },
               },
    }).subscribe((data) => {
            this.groupValues=data.data
            this.actionLinkLoading=false
console.log("Group",this.groupValues)
            // setTimeout(()=>{
              
            // },100)
            console.log("Ind Grp",this.groupValues);
           
          });
  }
}
