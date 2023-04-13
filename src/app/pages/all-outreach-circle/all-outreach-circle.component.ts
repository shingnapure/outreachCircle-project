import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { CookieService } from 'ngx-cookie-service';
import { landing } from 'src/app/graphql/graphql.query';
import { DataService } from 'src/app/services/data.service';
import {
  Search,
  Filter,
  outreachcircleitem,
  AllOuterCircleList,
} from 'src/app/services/interface';

@Component({
  selector: 'app-all-outreach-circle',
  templateUrl: './all-outreach-circle.component.html',
  styleUrls: ['./all-outreach-circle.component.css'],
})
export class AllOutreachCircleComponent implements OnInit {
  outercircleList: outreachcircleitem[];
  sizeOfOc: number = 0;
  fetching = true;
  val = {
    skip: 0,
    limit: 100,
    filter: {
      stateFilter: {},
      searchFilter: {},
    },
  };

  constructor(
    private dataService: DataService,
    private cookies: CookieService,
    private apollo: Apollo
  ) {}

  ngOnInit() {
    this.fetchData();
  }

  // Getting the Filter values from Child
  filterValues(value: Filter) {
    this.val.filter.stateFilter = value;
    this.fetchData();
  }

  // Getting the Search values from Child
  searchValues(values: Search) {
    Object.keys(values).forEach((key) => {
      if (values[key] === '') {
        delete values[key];
      }
    });
    this.val.filter.searchFilter = values;
    this.fetchData();
  }

  // remove the filter
  handleRemoveFilter(checkState: string) {
    if (checkState == 'filter') {
      this.val.filter.stateFilter = {};
    } else if (checkState == 'search') {
      this.val.filter.searchFilter = {};
    }
    this.fetchData();
  }

  // Fetching the api
  fetchData() {
    this.fetching = true;
    this.apollo
      .query<AllOuterCircleList>({
        query: landing,
        variables: { input: this.val },
        context: {
          headers: { Authorization: this.cookies.get(this.dataService.token) },
        },
      })
      .subscribe((val) => {
        this.outercircleList = val.data.outreachCirclesByLoggedInUser.items;
        this.sizeOfOc = this.outercircleList.length;
        this.fetching = false;
      });
  }
}
