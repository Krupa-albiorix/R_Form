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
  constructor() { }

  ngOnInit(): void {
    // this.data = localStorage.getItem('Users');
    this.data = JSON.parse(localStorage.getItem('Users')!);
    console.log(this.data);
  }

  getData() {
  }
}
