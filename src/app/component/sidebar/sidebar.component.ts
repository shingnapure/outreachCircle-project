import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit  {
  constructor() {
    
  }

  @Input() linkId : string;
  @Input() name : string;

  ngOnInit(): void {
    

  }
  
}
