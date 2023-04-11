import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { CookieService } from 'ngx-cookie-service';
import { userLogout } from 'src/app/graphql/graphql.mutation';
import { userByToken } from 'src/app/graphql/graphql.query';
import { DataService } from 'src/app/services/data.service';
import { logOut, userbytoken } from 'src/app/services/interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  username: string;
  fullName: string;
  logoutVal: string = 'logout';

  constructor(
    private dataservice: DataService,
    private cookies: CookieService,
    private router: Router ,
    private apollo : Apollo
  ) {}

  ngOnInit(): void {

    this.apollo.query<userbytoken>({
      query : userByToken ,
      variables : {
        token: this.cookies.get(this.dataservice.token) 
      }

    }).subscribe(({ data }) => {
      this.username = data.userByToken.username;
      this.fullName =
        data.userByToken.firstName + ' ' + data.userByToken.lastName;
    });
  }


  logout() {

    this.apollo.mutate<logOut>({
      mutation : userLogout ,
      context : { headers: { Authorization: this.cookies.get(this.dataservice.token) },
    }

    }).subscribe(
        () => {
          this.cookies.delete(this.dataservice.token);
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(error.message);
        }
      );
  }
}
