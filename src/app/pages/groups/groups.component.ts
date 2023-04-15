import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateGroupModelComponent } from 'src/app/component/create-group-model/create-group-model.component';


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  constructor(private dialog : MatDialog) { }
  openDialog(){
    this.dialog.open(CreateGroupModelComponent)
  }
  data=[
    {
      groupName:"RSS",
      aliasCount:1,
      sCount:0,
      link:1
    },
    {
      groupName:"RSS 1",
      aliasCount:0,
      sCount:2,
      link:1
    },
    {
      groupName:"RSS 2",
      aliasCount:0,
      sCount:0,
      link:0
    },
    {
      groupName:"RSS 3",
      aliasCount:5,
      sCount:6,
      link:1
    }
  ]
  groupLoading:boolean=false

  ngOnInit(): void {
    setTimeout(()=>{
      this.groupLoading=false
    },3000)
    this.groupLoading=true

  }
  group:boolean=false
}
