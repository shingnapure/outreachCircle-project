import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { userLogout } from 'src/app/graphql/graphql.mutation';
import { userByToken } from 'src/app/graphql/graphql.query';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  token = { token: this.cookies.get(this.dataservice.token) };
  username: string;
  fullName: string;
  logoutVal: string = 'logout';

  constructor(
    private dataservice: DataService,
    private cookies: CookieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dataservice.getData(userByToken, this.token).subscribe(({ data }) => {
      this.username = data.userByToken.username;
      this.fullName =
        data.userByToken.firstName + ' ' + data.userByToken.lastName;
    });
  }

  logout() {
    this.dataservice
      .logOut(userLogout, {
        headers: { Authorization: this.cookies.get(this.dataservice.token) },
      })
      .subscribe(
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
