import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrls: ['./filter-search.component.css']
})
export class FilterSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  @ViewChild('MatMenuTrigger') trigger: MatMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }

}
