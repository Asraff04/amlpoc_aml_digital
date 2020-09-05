import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserdetailsRolesComponent } from './userdetails-roles/userdetails-roles.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { RolesTableComponent } from './roles-table/roles-table.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { TableauDataComponent } from './tableau-data/tableau-data.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SarAnalyticsComponent } from './sar-analytics/sar-analytics.component';
import { IndustrialSarComponent } from './industrial-sar/industrial-sar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SettingsComponent } from './settings/settings.component';
import { AbcComponent } from './abc/abc.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { MaintainUserComponent } from './maintain-user/maintain-user.component';
import { MapReportsComponent } from './map-reports/map-reports.component';
import { RolesReportsComponent } from './roles-reports/roles-reports.component';
import { AlertModule } from './alert/alert.module';
import { SignupComponent } from './signup/signup.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
// import { AuthInterceptorService } from './services/auth-interceptors.service';
// import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserdetailsRolesComponent,
    UsersTableComponent,
    RolesTableComponent,
    LoginPageComponent,
    PageHeaderComponent,
    TableauDataComponent,
    HomepageComponent,
    SarAnalyticsComponent,
    IndustrialSarComponent,
    SettingsComponent,
    AbcComponent,
    SidebarComponent,
    HomeScreenComponent,
    NoAccessComponent,
    MaintainUserComponent,
    MapReportsComponent,
    RolesReportsComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AlertModule,
    MatCardModule
  ],
  exports: [
    MatCardModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
