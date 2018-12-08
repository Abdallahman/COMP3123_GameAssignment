import { Component, OnInit } from "@angular/core";
import { AuthService} from '../../controller/service/auth.service';
import {FormGroup, FormControl, FormBuilder, Validators, NgForm} from '@angular/forms';
import { RouterModule,Route, Router } from '@angular/router';
import { Admin } from '../../model/admin'

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

  /*admin: Admin [] =
  [
    { _id:1, username:'Abdallahman.Habyarimana', password:'Abdal'},
    { _id:2, username:'Renata.Moura', password:'Renata'},
    { _id:3, username:'Amanda', password:'Amanda'},
   ]
*/
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,
    private myRoute: Router,
    private auth: AuthService) {
    this.loginForm = fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.maxLength(8)]),
    });
  }

  ngOnInit() {
  }


  login() {    if (this.loginForm.valid) {
      this.auth.sendToken(this.loginForm.value.user)
      this.myRoute.navigate(["mainpage"]);
    }
  }
}
