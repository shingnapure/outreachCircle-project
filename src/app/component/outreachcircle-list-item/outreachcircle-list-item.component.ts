import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from "apollo-angular"
import { CookieService } from 'ngx-cookie-service';


const landing=gql`
query outreachCirclesByLoggedInUser($input: AllOutreachCirclesInput!) {
  outreachCirclesByLoggedInUser(input: $input) {
    total
    items {
      id
      name
      city
      state
      code {
        value
        __typename
      }
      logo {
        id
        url
        __typename
      }
      status {
        createdAndActivate
        setup {
          isAudienceCreated
          isActionCreated
          hasSupporter
          __typename
        }
        __typename
      }
      supporterCount
      actionCount
      groupsCount
      aliasCount
      activeSupportersCount
      liveActionsCount
      __typename
    }
    __typename
  }
}

`
@Component({
  selector: 'app-outreachcircle-list-item',
  templateUrl: './outreachcircle-list-item.component.html',
  styleUrls: ['./outreachcircle-list-item.component.css']
})

export class OutreachcircleListItemComponent implements OnInit {

data:[]=[]
fetching:boolean=false
  constructor(private apollo:Apollo , private cookies : CookieService) { }

  ngOnInit(){
    this.fetching=true
    this.apollo.watchQuery<any>({
      query:landing,
      context:{
        headers: {Authorization: this.cookies.get('_vc_token')}
      },
      variables:{
        "input": {
          "skip": 0,
          "limit": 1000000,
          "filter": {}}
        }
    }).valueChanges.subscribe(({data})=>{
       this.data=data.outreachCirclesByLoggedInUser.items
      this.fetching=false
      // console.log(data.outreachCirclesByLoggedInUser.items);
      // console.log("data",this.data);
    })
  }
}
