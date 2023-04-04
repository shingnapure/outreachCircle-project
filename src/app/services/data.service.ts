import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

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
@Injectable({
  providedIn: 'root'
})
export class DataService {
  
    constructor(private apollo:Apollo , private cookies : CookieService) { }


    getData(variable){
      return this.apollo.query<any>({
        query:landing,
        context:{
          headers: {Authorization: this.cookies.get('_vc_token')}
        },
        variables : variable
      })
    }

    


    
}
