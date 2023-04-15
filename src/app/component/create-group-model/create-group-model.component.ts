import { AfterContentInit, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-create-group-model',
  templateUrl: './create-group-model.component.html',
  styleUrls: ['./create-group-model.component.css']
})
export class CreateGroupModelComponent implements OnInit  {

  constructor() { }
  ngOnInit(): void {
  }
  
  name : string ;
  
  createGroup(){
    alert('h')
  }
  
  
}
