import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
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
  detailForm! : FormGroup;

  constructor(private formBuilder: FormBuilder) {
    
  }

  createRegistrationForm() {
    this.registrationForm = this.formBuilder.group({
      choice: ['email',],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.email]],
      address: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(200)]],
      hobbies: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      username: [''],
      date: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern("^([a-zA-Z0-9@*#]{8,15})$")]],
      cpassword: ['', [Validators.required]],
      details: this.formBuilder.array([])
    }, { 
      validator: ConfirmedValidator('password', 'cpassword')
    });
  }

  get details() {
    return this.registrationForm.controls["details"] as FormArray;
  }

  addDetail() {
    this.detailForm = this.formBuilder.group({
      skill: ['', Validators.required],
      experience: ['', Validators.required]
    });
    this.details.push(this.detailForm);
  }

  deleteDetail(detailIndex: number) {
    this.details.removeAt(detailIndex);
  }

  ngOnInit(): void {
    this.createRegistrationForm();
    this.registrationForm.controls['choice'].valueChanges.subscribe(
      (selectedValue) => {
        console.log(selectedValue);
        console.log(this.registrationForm);
        if(selectedValue !== 'email') {
          this.registrationForm.controls['email'].setValidators(null);
          this.registrationForm.controls['email'].updateValueAndValidity();
          this.registrationForm.controls['username'].setValidators([Validators.required]);
          this.registrationForm.controls['username'].updateValueAndValidity();
        } else {                
          this.registrationForm.controls['username'].setValidators(null);
          this.registrationForm.controls['username'].updateValueAndValidity();
          this.registrationForm.controls['email'].setValidators([Validators.required]);
          this.registrationForm.controls['email'].updateValueAndValidity();
        }
      }
    );
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

  hobbies = [
    { id : 1, name : 'Reading' },
    { id : 2, name : 'Cooking' },
    { id : 3, name : 'Playing Cricket' },
    { id : 4, name : 'Listening Music' }
  ];
}

function clearValidators() {
  throw new Error('Function not implemented.');
}

