import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { outreachByAlias } from 'src/app/graphql/graphql.query';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit , OnDestroy {
  constructor(
    private apollo: Apollo,
    private cookies: CookieService,
    private router: Router,
    private service: DataService
  ) {
  }

  handleData() {
    this.linkId = this.router.url.split('/')[2];
    this.apollo
      .query<any>({
        query: outreachByAlias,
        variables: {
          alias: this.linkId,
        },
        context: {
          headers: { Authorization: this.cookies.get(this.service.token) },
        },
      })
      .subscribe(({ data }) => {
        this.name = data.outreachCircleByAlias.name;
        console.log('form sidebar', this.linkId, this.name);
      });
  }

  linkId: string;
  name: string;

  ngOnInit(): void {
    this.handleData()
  }

  ngOnDestroy(): void {
    this.handleData()
  }

  
}
