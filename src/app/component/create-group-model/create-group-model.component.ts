import { AfterContentInit, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-group-model',
  templateUrl: './create-group-model.component.html',
  styleUrls: ['./create-group-model.component.css']
})
export class CreateGroupModelComponent implements OnInit  {

  constructor(private dialogRef : MatDialogRef<CreateGroupModelComponent>) { }
  ngOnInit(): void {
  }
  name : string ;
  
  handleClose(){
    this.dialogRef.close()
  }

  createGroup(){
    alert('helo')
  }
  
  
}
