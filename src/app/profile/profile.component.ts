import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: FormGroup;
  constructor() { }

  ngOnInit() {
    this.profile=new FormGroup({
      'empId': new FormControl(),
      'firstName': new FormControl() ,
      'lastName': new FormControl() ,
      'sex': new FormControl() ,
      'dob': new FormControl(),
      'joinDate': new FormControl(),
      'role': new FormControl() ,
      'level': new FormControl() ,
      'salary': new FormControl(),
      'manager1': new FormControl() ,
      'manager2': new FormControl() ,
      'contact': new FormControl(),
      'add1': new FormControl() ,
      'add2': new FormControl() ,
      'add3': new FormControl() ,
      'city': new FormControl() ,
      'state': new FormControl() ,
      'country': new FormControl() ,
      'zip': new FormControl(),
      'email': new FormControl() ,
 
      'nameOfBank': new FormControl() ,
      'accType': new FormControl() ,
      'accountNumber': new FormControl(),
      'modeOfTransaction': new FormControl()
    });
  }

}
