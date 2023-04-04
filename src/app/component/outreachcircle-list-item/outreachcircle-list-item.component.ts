import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from "apollo-angular"


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
  constructor(private apollo:Apollo) { }

  ngOnInit(){
    this.fetching=true
    this.apollo.watchQuery<any>({
      query:landing,
      context:{
        headers: {Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE0NWM4MmE2LTZhNGItNGUwNS04OWIxLTlkYTA1YzVmNGQxYSIsImlhdCI6MTY4MDM1NjQ2OX0._tWUxz4mmin2X64oeW-psf2Ecf7pNVJCCH0bSb0rR_I"}
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
