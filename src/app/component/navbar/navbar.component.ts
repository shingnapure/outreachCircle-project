import { Component, OnInit } from '@angular/core';
import {userByToken} from 'src/app/graphql/userByToken.query';
import { DataService } from 'src/app/services/data.service';

interface userToken{
  userByToken : {
    id : string,
    username : string,
    firstName : string,
    lastName : string,

  }
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dataservice : DataService) { }
  
  token = { token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVhOTExZDM5LWNkY2UtNDdmOS05MGM4LTNmZjBiYWU5NTI3MyIsImlhdCI6MTY4MDA3MzM2Nn0.TGigrgs7C6RNRbBWF54j24nwsP1d5XVcsUvxujVbOJc"}

  ngOnInit(): void {

    this.dataservice.getData(userByToken , this.token).subscribe((res)=>{
      console.log('comming form navbar',res)
    })
    


    
  }

}

