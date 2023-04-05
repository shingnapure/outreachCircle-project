import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { FilterSearchComponent } from './component/filter-search/filter-search.component';
import { OutreachcircleListItemComponent } from './component/outreachcircle-list-item/outreachcircle-list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { GraphQLModule } from './graphql.module';
import { UserComponent } from './pages/user/user.component';
import { AllOutreachCircleComponent } from './pages/all-outreach-circle/all-outreach-circle.component';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { SkeletonComponent } from './skeleton/skeleton.component';
import { CookieService } from 'ngx-cookie-service';

import { IsloggedService } from './services/islogged.service';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    FilterSearchComponent,
    OutreachcircleListItemComponent,
    UserComponent,
    AllOutreachCircleComponent,
    LoginFormComponent,
    SkeletonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GraphQLModule,
    FormsModule,
    NgxSkeletonLoaderModule ,
    MatMenuModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
