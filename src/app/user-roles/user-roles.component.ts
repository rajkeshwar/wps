import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.scss']
})
export class UserRolesComponent implements OnInit {

  userRoles:any = [];

  constructor() { }

  ngOnInit() {
    const userRole = {
      userRoles: 'Adele Vance',
      accessRights: 'Operator, Site Admin',
      Description: 'Remarks about this will be displayed here',
    }
    
    for (let i = 0; i < 10; i++){
      this.userRoles.push(userRole);
    }
  }

}
