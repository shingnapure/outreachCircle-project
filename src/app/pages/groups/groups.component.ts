import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Apollo } from "apollo-angular";
import { CookieService } from "ngx-cookie-service";
import { allGroup } from "src/app/graphql/graphql.query";
import { DataService } from "src/app/services/data.service";
import { Groups } from "src/app/services/interface";

@Component({
  selector: "app-groups",
  templateUrl: "./groups.component.html",
  styleUrls: ["./groups.component.css"],
})
export class GroupsComponent implements OnInit {
  href:string=''
  groupID:string=''
  group: boolean = false;
  actionLoading: boolean = false;
  groupLoading: boolean = false;
  groupData: any;
  individaulGroupId: string = "";
  searchText:string=''
  constructor(
    private apollo: Apollo,
    private service: DataService,
    private cookies: CookieService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.href=this.router.url
    this.groupID=this.href.split("/")[4]
    this.fetchGroups();
  }
  fetchGroups() {
    this.groupLoading = true;

    this.apollo
      .query<Groups>({
        query: allGroup,
        variables: {
          input: {
            outreachCircleId: this.groupID,
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
        setTimeout(()=>{
          this.groupLoading = false;
        },1000)
        console.log("All Groups",this.groupData)
      });
  }

  handleGroup(index: string) {
    this.individaulGroupId = index;
    this.actionLoading = true;
  }
  getData(value: boolean) {
    this.actionLoading = value;
  }
}
