import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { landing } from 'src/app/graphql/graphql.query';
import { DataService } from 'src/app/services/data.service';
import { Search, Filter, outreachcircleitem } from 'src/app/services/interface';

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
    private cookies: CookieService
  ) {}

  ngOnInit() {
    this.fetchData();
  }

  // Getting the Filter values from Child
  filterValues(value: Filter) {
    this.val.filter.stateFilter = value;
    this.fetching = true;
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
    this.fetching = true;
    this.fetchData();
  }

  // remove the filter
  handleRemoveFilter(checkState : boolean){
    if(checkState){
      this.val.filter.stateFilter = {}
      this.fetchData()
    }
  }

  // Fetching the api
  fetchData() {
    this.dataService
      .getData(
        landing,
        { input: this.val },
        {
          headers: { Authorization: this.cookies.get(this.dataService.token) },
        }
      )
      .subscribe((val) => {
        this.fetching = false;
        this.outercircleList = val.data.outreachCirclesByLoggedInUser.items;
        this.sizeOfOc = this.outercircleList.length;
        this.fetching = false;
      });
  }
}
