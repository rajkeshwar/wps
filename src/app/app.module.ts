import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {ProgressBarModule} from 'primeng/progressbar';
import {PaginatorModule} from 'primeng/paginator';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {DialogModule} from 'primeng/dialog';
import {TabViewModule} from 'primeng/tabview';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { CommonPipeModule } from './pipes/common-pipes';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserRolesComponent } from './user-roles/user-roles.component';

@NgModule({
  declarations: [
    AppComponent,
    UserManagementComponent,
    UserDetailsComponent,
    UserRolesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TableModule,
    MultiSelectModule,
    DropdownModule,
    CalendarModule,
    ProgressBarModule,
    HttpClientModule,
    PaginatorModule,
    ButtonModule,
    CheckboxModule,
    DialogModule,
    TabViewModule,
    CommonPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
