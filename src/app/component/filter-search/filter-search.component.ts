import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountryList } from 'src/app/services/countryData';
import { Countrydata } from 'src/app/services/interface';

@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrls: ['./filter-search.component.css'],
})

export class FilterSearchComponent implements OnInit {
  masterSelected: boolean;
  checkedList: string[];
  excludeCountry: boolean = false;
  showExclude: boolean = false;
  searchText: string = '';
  displaySearch: boolean = false;
  filterSearch: boolean = false;
  filterResults = {};
  displayStateCount : boolean = false;
  isSearchApply : boolean = false;
  searchVal:string;

  outreachname : string = '';
  outreachadmin : string = '';
  outreachlastname : string = '';
  @Output() getFilterValue = new EventEmitter();
  @Output() getSearchFilter = new EventEmitter();
  @Output() removeFilter = new EventEmitter();
  @ViewChild('searchOc') searchData: NgForm;
  @ViewChild('filterCountry') filterCountry: NgForm;

  constructor(private countrydata: CountryList) {}

  ngOnInit() {
    this.masterSelected = false;
    this.getCheckedAllCountries();
  }

  //search handle function
  search() {
    this.displaySearch = !this.displaySearch;
    this.filterSearch = false;
  }

  showInputValue(){
    this.displaySearch = !this.displaySearch;
    let [name , admin , lastname] = this.searchVal.split(',')
    this.outreachname = name;
    this.outreachadmin = admin
    this.outreachlastname = lastname
  }


  //Apply open/close on search model
  applySearch() {

    this.checkEmptyFilterValue(this.searchData.value)
    
    this.getSearchFilter.emit(this.searchData.value);
    this.displaySearch = false;
    this.isSearchApply = true;
  }

  checkEmptyFilterValue(data){
    let val = Object.values(data).filter((item) => {
      if(item) {
        return item
      }
    })
    this.searchVal = val.join(',')
  }
  closeSearch() {
    this.displaySearch = false;
  }

  removeSearch(){
    this.isSearchApply = false
    this.removeFilter.emit('search')
  }

  //filter handle function
  filter() {
    this.filterSearch = !this.filterSearch;
    this.displaySearch = false;
  }

  //   when click on the all-select checkbox (select all conutry data)
  checkUncheck() {
    this.showExclude = true;
    this.masterSelected = this.countrydata.countryList.every(
      (item: Countrydata) => {
        return item.isSelected == true;
      }
    );
    this.getCheckedAllCountries();
  }

  uncheckValues() {
    this.showExclude = false;
    this.masterSelected = this.countrydata.countryList.every(
      (item: Countrydata) => {
        return item.isSelected == false;
      }
    );
     this.getCheckedAllCountries();
  }

  // check is individual conutry is selected or not
  isAllSelected() {
    this.showExclude = true;
    for (let i = 0; i < this.countrydata.countryList.length; i++) {
      this.countrydata.countryList[i].isSelected = this.masterSelected;
    }
    this.getCheckedAllCountries();
  }

  // check if is checked or not
  getCheckedAllCountries() {
    this.checkedList = [];
    for (var i = 0; i < this.countrydata.countryList.length; i++) {
      if (this.countrydata.countryList[i].isSelected)
        this.checkedList.push(this.countrydata.countryList[i].code);
    }
    this.filterResults = {
      stateCodes: this.checkedList,
      isExclude: this.excludeCountry,
    };
  }

  exclude() {
    this.excludeCountry = !this.excludeCountry;
  }

  //Apply open/close on filter model
  applyFilter() {
    this.getFilterValue.emit(this.filterResults);
    this.filterSearch = false;
    this.displayStateCount = true

  }
  closeFilter() {
    this.filterSearch = false;
  }

  // remove the filter
  getAllData(){
    this.isAllSelected()
    this.removeFilter.emit('filter')
    this.displayStateCount = false
    
  }
}
