import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { ConfirmedValidator } from 'src/app/Validator/confirmed.validator';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  title = "Registration Form";

  registrationForm! : FormGroup;
  user : any = [];

  constructor(private formBuilder: FormBuilder,
    private route : ActivatedRoute) {
    this.route.params.subscribe((res) => {
      this.user.id = res['id'];
    })
  }

  createRegistrationForm() {
    const user = localStorage.getItem('Users');
    if (user !== null) {
      const users = JSON.parse(user);
      const currentUser = users.find((m: any) => m.id == this.user.id);
      if (currentUser !== undefined) {
        this.registrationForm = this.formBuilder.group({
          firstname: [currentUser.firstname, [Validators.required]],
          lastname: [currentUser.lastname, [Validators.required]],
          email: [currentUser.email, [Validators.required, Validators.email]],
          address: [currentUser.address, [Validators.required, Validators.minLength(5), Validators.maxLength(200)]],
          hobbies: [currentUser.hobbies, [Validators.required]],
          mobile: [currentUser.mobile, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
          date: [currentUser.date, [Validators.required]],
          password: [currentUser.password, [Validators.required, Validators.minLength(8), Validators.pattern("^([a-zA-Z0-9@*#]{8,15})$")]],
          cpassword: [currentUser.cpassword, [Validators.required]]
          }, { 
            validator: ConfirmedValidator('password', 'cpassword')
          });
      }
    } 
  }

  ngOnInit(): void {
    this.createRegistrationForm();
  }

  updateUser() {
    console.log(this.registrationForm);
    const users = JSON.parse(localStorage.getItem('Users')!);
    console.log(this.user);
    if (users) {
      console.log(users);
      const currentUserindex = users.findIndex((a: any) => a.id == this.user.id);
      users[currentUserindex] = {...this.registrationForm.value, id: this.user.id};
      console.log(users);
      localStorage.setItem('Users', JSON.stringify(users));
    }
  }

  hobbies = [
    { id : 1, name : 'Reading' },
    { id : 2, name : 'Cooking' },
    { id : 3, name : 'Playing Cricket' },
    { id : 4, name : 'Listening Music' }
  ];

}
