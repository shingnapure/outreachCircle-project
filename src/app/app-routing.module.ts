import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterSearchComponent } from './component/filter-search/filter-search.component';
import { MainSectionComponent } from './component/main-section/main-section.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path : "" , component : LoginComponent},
  { path : "navbar" , component : NavbarComponent},
  { path : "sidebar" , component : SidebarComponent},
  { path : "filter" , component : FilterSearchComponent},
  { path : "main" , component : MainSectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
