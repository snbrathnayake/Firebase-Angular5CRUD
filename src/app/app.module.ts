import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { RouterModule, Routes } from "@angular/router";

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeFormComponent } from './employees/employee-form/employee-form.component';
import { environment } from '../environments/environment';

import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { LandingPageComponent } from './shared/components/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeListComponent,
    EmployeeFormComponent,
    NavbarComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFontAwesomeModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {
        path: "",
        pathMatch: "full",
        component: LandingPageComponent
      },
      {
        path: "add-employee",
        component:EmployeesComponent
      },
      {
        path: "add-customer",
        component:EmployeesComponent
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
