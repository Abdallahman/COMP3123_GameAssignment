import { Component, OnInit } from "@angular/core";
import { AuthService} from '../../controller/service/auth.service';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { RouterModule,Route, Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

 
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,
    private myRoute: Router,
    private auth: AuthService) {
    this.loginForm = fb.group({
      user: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.maxLength(8)]),
    });
  }

  
  ngOnInit() {
  }
  login() {
    if (this.loginForm.valid) {
      this.auth.sendToken(this.loginForm.value.user)
      this.myRoute.navigate(["mainpage"]);
    }
  }
}
