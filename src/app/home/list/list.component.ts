import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  isLocalStorageSupported: any;
  localStorage: any;
  data: any;
  user: any;
  constructor() { }

  ngOnInit(): void {
    this.data = localStorage.getItem('Users');
    this.data = JSON.parse(localStorage.getItem('Users')!);
    console.log(this.data);
  }

  delete(id : any) {
    console.log(this.registrationForm);
    const users = JSON.parse(localStorage.getItem('Users')!);
    console.log(this.user);
    if (users) {
      console.log(users);
      const currentUserindex = users.splice(users.findIndex((a: any) => a.id == id),1);
      console.log(users[currentUserindex]);
      localStorage.setItem('Users', JSON.stringify(users));
    }
    const records = localStorage.getItem('User');
    if ( records !== null) {
      this.user = JSON.parse(records);
    }
  }
  registrationForm(registrationForm: any) {
    throw new Error('Method not implemented.');
  }
}
