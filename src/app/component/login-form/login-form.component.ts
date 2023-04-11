import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { CookieService } from 'ngx-cookie-service';
import { Userlogin } from 'src/app/graphql/graphql.mutation';
import { DataService } from 'src/app/services/data.service';
import { InputLoginUser } from 'src/app/services/interface';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})

export class LoginFormComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm;

  loading: boolean = false;
  loadingImg: string;
  error: boolean;
  emailError: string;
  passwordError: string;
  email: string;
  password: string;

  constructor(
    private cookies: CookieService,
    private route: Router,
    private apollo : Apollo ,
    private dataService: DataService 
  ) {}

  ngOnInit(): void {}

  handleForm() {
    this.loading = true;
    this.loadingImg = 'loading..';
    let data = {
      user: {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password,
      },
    };

    // graphql api call
    this.apollo.mutate<InputLoginUser>({
      mutation : Userlogin ,
      variables : data
    }).subscribe(
      ({ data }) => {
        this.loadingImg = '✓';
        setTimeout(() => {
          this.cookies.set(this.dataService.token, data.login.token);
          this.route.navigateByUrl('/user/home');
        }, 1000);
      },
      (error) => {
        this.loading = false;
        this.error = true;
        if (error.message.includes('email id')) {
          this.emailError =
            'Email address does not exist. Do you want to Sign-up?';
        } else if (error.message.includes('password')) {
          this.passwordError =
            'The password you entered is invalid. Please try again.';
        }
      }
    );
  }

  handleCloseOnInput(input: HTMLInputElement) {
    if (input.value && input.name == 'username') {
      this.email = '';
      this.emailError = 'This field is manadatory';
    } else if (input.name == 'password') {
      this.password = '';
      this.passwordError = 'This field is manadoarty';
    }
  }
}
