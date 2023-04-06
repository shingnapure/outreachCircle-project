import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { MatMenuTrigger } from '@angular/material/menu';
@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrls: ['./filter-search.component.css']
})
export class FilterSearchComponent implements OnInit {
 
  constructor() { }

  countryList:{} = {
    "Alaska": "AK",
    "Alabama": "AL",
    "Arkansas": "AR",
    "Arizona": "AZ",
    "California": "CA",
    "Colorado": "CO",
    "Connecticut": "CT",
    "Delaware": "DE",
    "Florida": "FL",
    "Georgia": "GA",
    "Hawaii": "HI",
    "Lowa": "IA",
    "Idaho": "ID",
    "Illinois": "IL",
    "Indiana": "IN",
    "Kansas": "KS",
    "Kentucky": "KY",
    "Louisiana": "LA",
    "Massachusetts": "MA",
    "Maryland": "MD",
    "Maine": "ME",
    "Michigan": "MI",
    "Minnesota": "MN",
    "Missouri": "MO",
    "Mississippi": "MS",
    "Montana": "MT",
    "North Carolina": "NC",
    "North Dakota": "ND",
    "Nebraska": "NE",
    "New Hampshire": "NH",
    "New Jersey": "NJ",
    "New Mexico": "NM",
    "Nevada": "NV",
    "New York": "NY",
    "Ohio": "OH",
    "Oklahoma": "OK",
    "Oregon": "OR",
    "Pennsylvania": "PA",
    "Rhode Island": "RI",
    "South Carolina": "SC",
    "South Dakota": "SD",
    "Tennessee": "TN",
    "Texas": "TX",
    "Utah": "UT",
    "Virginia": "VA",
    "Vermont": "VT",
    "Washington": "WA",
    "Wisconsin": "WI",
    "West Virginia": "WV",
    "Wyoming": "WY",
    "District of Columbia": "DC",
    "American Samoa": "AS",
    "Guam": "GU",
    "Northern Mariana Islands": "MP",
    "Ouerto Rico": "PR",
    "U.S.Virgin Islands": "VI",
    "Federated Stats of Micronesia": "FM",
    "Marshall Islands": "MH",
    "Palau": "PW"
  };

  selectedCountry : Number = Object.keys(this.countryList).length
  displaySearch:boolean=false
  filterSearch:boolean=false

  ngOnInit(): void {
    console.log(this.countryList)

  }
@ViewChild('searchOc') searchData:NgForm
@ViewChild('filterCountry') filterData:NgForm

  search(){
    console.log(this.searchData.value);
    this.displaySearch=false
    
  }
  filter(){
    this.filterSearch=!this.filterSearch
    this.displaySearch=false
  }

  searchClick(){
    this.displaySearch=!this.displaySearch
    this.filterSearch=false
    
  }
  close(){
    this.displaySearch=false
  }

  closeFilterCountry(){
    this.filterSearch=false
  }
  filterSubmit(){
  console.log("filterDaa",this.filterData);
  
  }
}
