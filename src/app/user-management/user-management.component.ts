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

    selectedCustomers: any[];

    representatives: any[];
    userRoles = [];

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
        customerId: 0,
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
        userObject.customerId = i + 1;
        this.customers.push({...userObject});
      }

      const userRole = {
        roleId: 0,
        userRoles: 'Adele Vance',
        accessRights: 'Operator, Site Admin',
        Description: 'Remarks about this will be displayed here',
      }
      
      for (let i = 0; i < 10; i++){
        userRole.roleId = i + 1;
        this.userRoles.push({...userRole});
        this.formFields.push(i + 1);
      }

    }

    toggleUserDialog() {
      this.isNewUserDialogVisible = !this.isNewUserDialogVisible;
    }
}
