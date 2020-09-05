import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserdetailsRolesComponent } from './userdetails-roles/userdetails-roles.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { RolesTableComponent } from './roles-table/roles-table.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { TableauDataComponent } from './tableau-data/tableau-data.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SarAnalyticsComponent } from './sar-analytics/sar-analytics.component';
import { SettingsComponent } from './settings/settings.component';
import { AbcComponent } from './abc/abc.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { MaintainUserComponent } from './maintain-user/maintain-user.component';
import { MapReportsComponent } from './map-reports/map-reports.component';
import { RolesReportsComponent } from './roles-reports/roles-reports.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'userrole', component: UserdetailsRolesComponent },
  { path: 'userstable', component: UsersTableComponent },
  { path: 'rolestable', component:RolesTableComponent},
  { path: 'tableaudata', component:TableauDataComponent},
  { path: 'homescreen', component:HomeScreenComponent},
  { path: 'saranalytics', component:SarAnalyticsComponent},
  { path: 'settings', component:SettingsComponent},
  { path: 'abc', component:AbcComponent},
  { path: 'maintainuser', component:MaintainUserComponent},
  { path: 'mapreports', component:MapReportsComponent},
  { path: 'rolesandreports', component:RolesReportsComponent},
  { path: 'signup', component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
