import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  formFields = [];

  constructor() { }

  ngOnInit() {
    // Create Array of length 5 
    Array(5).fill(null).map((u, i) => this.formFields.push(i))
  }

}
