import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { Userlogin } from 'src/app/graphql/graphql.mutation';

interface userLogin {
  login: {
    token: String;
    user: {
      id: String;
      username: String;
      firstName: String;
      lastName: String;
    };
  } 
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})


export class LoginFormComponent implements OnInit {
  constructor(private apollo: Apollo) {}

  ngOnInit(): void {}

  @ViewChild('loginForm') loginForm: NgForm;

  loading : boolean = false;
  loadingImg : string;

  error : boolean;
  emailError: string;
  passwordError: string;

  email: string;
  password: string;

  handleForm() {
    this.loading = true;
    this.apollo
      .mutate<userLogin>({
        mutation: Userlogin,
        variables: {
          user: {
            username: this.loginForm.value.username,
            password: this.loginForm.value.password,
          },
        },
      })
      .subscribe(
        (res) => {
          console.log(res);
          this.loadingImg = "✓"
        },
        (error) => {
          if(error.message.includes('email id')){
            this.emailError = 'Email address does not exist. Do you want to Sign-up?'
          }else if(error.message.includes('')){
            this.passwordError = 'The password you entered is invalid. Please try again.'
          }
          this.error = true
        }
      );
  }

  
  handleClose(input: HTMLInputElement) {
    if (input.value && input.name == 'username') {
      this.email = '';
      this.emailError = 'This field is manadatory';
    } else if (input.name == 'password') {
      this.password = '';
      this.passwordError = 'This field is manadoarty';
    }
  }
}
