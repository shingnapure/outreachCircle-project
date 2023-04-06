import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
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

  constructor(private dataservice : DataService , private cookies : CookieService) { }
  
  token = { token : this.cookies.get('_vc_token')}
  username : string;
  fullName : string;
  ngOnInit(): void {
    this.dataservice.getData(userByToken , this.token).subscribe(({ data })=>{
      this.username = data.userByToken.username
      this.fullName = data.userByToken.firstName + '' + data.userByToken.lastName
    })
    
  }

}

