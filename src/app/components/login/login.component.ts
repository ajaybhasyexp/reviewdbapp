import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Constants } from '../../constants'
import { ApiService } from '../../Services/api.service';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form;
  constructor(private myFormBuider: FormBuilder,
    private myRoute: Router, private api: ApiService,
    private auth: AuthService) {
    this.form = myFormBuider.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  onLoginClick() {
    if (this.form.valid) {

      let payLoads = {
        Email: this.form.value.email,
        password: this.form.value.password
      }
      this.api.get('api/values').subscribe(data => {
        console.log(data);
      });

      this.api.post(Constants.UrlConstants.authenticate, payLoads)
        .subscribe(data => {
          this.auth.sendToken(data.token);
          this.auth.setLoggedInUser(data.userName);
          this.form.reset();
          this.myRoute.navigate([Constants.Navigations.home, data.userName])
        });
    }
  }

}
