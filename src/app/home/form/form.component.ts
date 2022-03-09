import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmedValidator } from '../../Validator/confirmed.validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  title = "Registration Form";

  registrationForm! : FormGroup;
  user : any = {};

  constructor(private formBuilder: FormBuilder) {
    
  }

  createRegistrationForm() {
    this.registrationForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(200)]],
      hobbies: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      date: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern("^([a-zA-Z0-9@*#]{8,15})$")]],
      cpassword: ['', [Validators.required]]
    }, { 
      validator: ConfirmedValidator('password', 'cpassword')
    });
  }

  ngOnInit(): void {
    this.createRegistrationForm();
  }

  onClickSubmit() {
    var id = new Date().getTime().toString();
    console.log(this.registrationForm.value);
    this.user = Object.assign(this.user, this.registrationForm.value);
    this.user.id = id;
    this.addUser(this.user);
  }

  addUser(user: any) {
    let users = [];
    if (localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users')!);
      users = [user, ...users];
    }
    else {
      users = [user];
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }

  // formSubmit() {
  //   console.log(this.registrationForm)
  // }

  hobbies = [
    { id : 1, name : 'Reading' },
    { id : 2, name : 'Cooking' },
    { id : 3, name : 'Playing Cricket' },
    { id : 4, name : 'Listening Music' }
  ];

}
