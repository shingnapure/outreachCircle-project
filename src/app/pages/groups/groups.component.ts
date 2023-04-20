import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Apollo, gql } from "apollo-angular";
import { CookieService } from "ngx-cookie-service";
import { CreateGroupModelComponent } from "src/app/component/create-group-model/create-group-model.component";
import { allGroup, outreachByAlias } from "src/app/graphql/graphql.query";
import { DataService } from "src/app/services/data.service";
import { Groups, allGroupData } from "src/app/services/interface";

@Component({
  selector: "app-groups",
  templateUrl: "./groups.component.html",
  styleUrls: ["./groups.component.css"],
})
export class GroupsComponent implements OnInit {
  href:string=''
  groupID:string=''
  groupName:string=''
  group: boolean = false;
  actionLoading: boolean = false;
  groupLoading: boolean = false;
  groupData: any
  groupDataLength:number=0
  individaulGroupId: string = "";
  searchText:string=''
  aliasID:string=''
  constructor(
    private apollo: Apollo,
    private service: DataService,
    private cookies: CookieService,
    private router:Router,
    private dialog:MatDialog

  ) {}

  openDialog(){
    this.dialog.open(CreateGroupModelComponent)
  }
  ngOnInit(): void {
    this.href=(this.router.url).split("/")[2]
    console.log("HREF",this.href);
    this.fetchAlias()

  }
  fetchAlias(){
    this.groupLoading = true;
    this.apollo
    .query<any>({
      query: outreachByAlias,
      variables:{
         alias: this.href
      },
      context: {
        headers: { Authorization: this.cookies.get(this.service.token) },
      },
    })
    .subscribe((data) => {
      this.aliasID=data.data.outreachCircleByAlias.id
      this.fetchGroups()
       
    });
  }
  fetchGroups() {

    this.apollo
      .query<Groups>({
        query: allGroup,
        variables: {
          input: {
            outreachCircleId: this.aliasID,
            skip: 0,
            limit: 10000000,
            sortBy: [
              {
                sortField: "Name",
                isAscending: true,
              },
            ],
          },
        },
        context: {
          headers: { Authorization: this.cookies.get(this.service.token) },
        },
      })
      .subscribe((data) => {
       
        this.groupData = data.data.getGroupsByOutreachCircle.items;
        this.groupDataLength=this.groupData.length
        console.log("data",this.groupData,this.groupDataLength);
        this.groupLoading = false;

      },(err)=>{
        console.log("Err",err);
        
      });
  }

  handleGroup(index: string,groupname:string) {
    this.service.editGroup(index,groupname)
    
    this.individaulGroupId = index;
    this.actionLoading = true;
  }
  getData(value: boolean) {
    this.actionLoading = value;
  }
}
