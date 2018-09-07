import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Constants } from '../../constants'
import { ApiService } from '../../Services/api.service';
import { AuthService } from '../../Services/auth.service';
import { User } from '../../models/user.model'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  form;

  user: User = {
    id: null,
    userName: null,
    email: null,
    firstName: null,
    lastName: null,
    password: null,
    phoneNumber: null,
    profileImage: null,
    userRole: null
  }
  //https://www.youtube.com/watch?v=H9CekX45hjU&list=PL6n9fhu94yhXwcl3a6rIfAI7QmGYIkfK5&index=17
  constructor(private myFormBuider: FormBuilder,
    private myRoute: Router, private api: ApiService,
    private auth: AuthService) {
    this.form = myFormBuider.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  onSignupClick(signupForm: NgForm): void {
    if (this.form.valid) {

      let payLoads = {
        Email: signupForm.value.email,
        password: signupForm.value.password
      }

      this.api.post(Constants.UrlConstants.signup, payLoads)
        .subscribe(data => {
          this.auth.sendToken(data.token);
          this.auth.setLoggedInUser(data.userName);
          this.form.reset();
          this.myRoute.navigate([Constants.Navigations.home, data.userName])
        });
    }
  }
}
