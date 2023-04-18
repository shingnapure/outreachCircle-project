import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { outreachByAlias } from 'src/app/graphql/graphql.query';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  linkId:string=''
name:string=''

  constructor(private apollo:Apollo,
              private cookies:CookieService,
              private router:Router,
              private service:DataService) { }

  aliasID:string=''
  ngOnInit(): void {
    this.linkId=this.router.url.split("/")[2]
    this.apollo
      .query<any>({
        query: outreachByAlias
      ,
        variables:{
          alias: this.linkId
        },
        context: {
          headers: { Authorization: this.cookies.get(this.service.token) },
        },
      })
      .subscribe(({data}) => {
       this.name=data.outreachCircleByAlias.name
         
      });
  }
  
}
