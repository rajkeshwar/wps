import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getRandomInt } from '../utils/utils';


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

      const statusList = ['ACTIVE', 'IN-PROGRESS', 'COMPLETED'];
      const languageList = ['English', 'Brazilian', 'German', 'Chinease', 'Japanese'];

      const userObject = {
        status: '',
        userName: 'Adam Wallen',
        roles: 'User Admin,System Engineer',
        classification: 'Service Engineer, Supervisor',
        accessRights: 'Execute Grid Commands, Create Credentials',
        userExpiryDate: new Date(),
        passwordExpiryDate: new Date(),
        servicePinExpiryDate: new Date(),
        language: 'English',
        remarks: 'Remarks about this user/roles will be diplaying here'
      };

      this.tableHeaders = Object.keys(userObject);

      for (let i = 0; i < 10; i++){
        userObject.status = statusList[getRandomInt(3)],
        userObject.language = languageList[getRandomInt(5)],
        this.customers.push({...userObject});
      }

    }

    toggleUserDialog() {
      this.isNewUserDialogVisible = !this.isNewUserDialogVisible;
    }

    getStatusClass(value) {
      return `status status--${value.toLowerCase()}`;
    }
}
