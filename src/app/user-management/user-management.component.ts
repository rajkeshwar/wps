import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  customers: any[];

    isNewUserDialogVisible = false;
    

    statuses: any[];
    tableHeaders = [];
    roleHeaders = [];

    loading: boolean = true;
    formFields = [];

    @ViewChild('dt', {static: true}) table: any;

    constructor(private httpClient: HttpClient) { }

    ngOnInit() {

      this.customers = [];

      const userObject = {
        status: 'active',
        userName: 'Adam Wallen',
        roles: 'User Admin,System Engineer',
        classification: 'Service Engineer, Supervisor',
        accessRights: 'Execute Grid Commands, Create Credentials',
        userExpiryDate: new Date().toLocaleString(),
        passwordExpiryDate: new Date().toLocaleString(),
        servicePinExpiryDate: new Date().toLocaleString(),
        language: 'English',
        remarks: 'Remarks about this user/roles will be diplaying here'
      };

      this.tableHeaders = Object.keys(userObject);

      for (let i = 0; i < 10; i++){
        this.customers.push({...userObject});
      }

    }

    toggleUserDialog() {
      this.isNewUserDialogVisible = !this.isNewUserDialogVisible;
    }
}
