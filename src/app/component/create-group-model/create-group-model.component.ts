import { AfterContentInit, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { CookieService } from 'ngx-cookie-service';
import { createGroups } from 'src/app/graphql/graphql.mutation';
import { outreachByAlias } from 'src/app/graphql/graphql.query';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-create-group-model',
  templateUrl: './create-group-model.component.html',
  styleUrls: ['./create-group-model.component.css']
})
export class CreateGroupModelComponent implements OnInit  {
href:string=''
aliasID:string=''
name : string= null ;
errorMsg : string='' ;
loader:boolean=false


  constructor(private dialogRef : MatDialogRef<CreateGroupModelComponent>,
    private apollo: Apollo,
    private service: DataService,
    private cookies: CookieService,
    private router:Router) { }
  ngOnInit(): void {
    this.href=(this.router.url).split("/")[2]
    this.fetchAlias()
  }
  
  
  handleClose(){
    this.dialogRef.close()
  }
  fetchAlias(){
    this.apollo
    .query<any>({
      query: outreachByAlias,
      variables:{
         alias: this.href
      },
      context: {
        headers: { Authorization: this.cookies.get(this.service.token) },
      },
    })
    .subscribe((data) => {
      this.aliasID=data.data.outreachCircleByAlias.id
    });
  }

  createGroup(){
    this.loader=true
    this.apollo.mutate<any>({
      mutation : createGroups ,
      variables :{
        input: {
          outreachCircleId:this.aliasID,
          name: this.name
        }
      },
      context: {
        headers: { Authorization: this.cookies.get(this.service.token) },
      }
  
    }).subscribe(
      (data) => {
    this.loader=false
      
        this.handleClose()
        console.log(data)
  
      },(err)=>{
        this.errorMsg=err.message
        this.loader = false
        console.log("Err msg",this.errorMsg);
        
      }
    )
  }
  isclick=false;
  remove(){
    this.name=''
    this.isclick = true;
  }
}
