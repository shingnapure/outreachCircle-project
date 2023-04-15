import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { CookieService } from 'ngx-cookie-service';
import { outreachByAlias } from 'src/app/graphql/graphql.query';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit  {
  constructor(private router : Router , private apollo : Apollo , private cookies : CookieService , private dataService : DataService) {
    
  }

  linkId;
  name ; 
  ngOnInit(): void {
    this.linkId = this.router.url.split('/')[2]

    this.apollo.query<any>({
      query : outreachByAlias ,
      variables : {
        "alias": this.linkId
      },
      context: {
        headers: { Authorization: this.cookies.get(this.dataService.token) },
      }
    }).subscribe(({ data }) => {
      this.name = data.outreachCircleByAlias.name
    });

  }
  
}
