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
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { CookieService } from 'ngx-cookie-service';
import { MatMenuModule } from '@angular/material/menu';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IsloggedService } from './services/islogged.service';
import { GroupsComponent } from './pages/groups/groups.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ActionsComponent } from './pages/actions/actions.component';
import { UserHomeSidenavComponent } from './component/user-home-sidenav/user-home-sidenav.component';
import { GroupLoadingComponent } from './loading/group-loading/group-loading.component';
import { ActionLinkLoadingComponent } from './loading/action-link-loading/action-link-loading.component';
import { ActionLinkAfterLoadingComponent } from './loading/action-link-after-loading/action-link-after-loading.component';
import {MatTabsModule} from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateGroupModelComponent } from './component/create-group-model/create-group-model.component';
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
    GroupsComponent,
    DashboardComponent,
    ActionsComponent,
    UserHomeSidenavComponent,
    GroupLoadingComponent,
    ActionLinkLoadingComponent,
    ActionLinkAfterLoadingComponent,
    GroupLoadingComponent,
    CreateGroupModelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GraphQLModule,
    FormsModule,
    NgxSkeletonLoaderModule,
    MatMenuModule,
    Ng2SearchPipeModule,
    MatTabsModule,
    MatDialogModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
