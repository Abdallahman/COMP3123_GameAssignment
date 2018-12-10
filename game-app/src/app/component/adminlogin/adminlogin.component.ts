import { Component, OnInit } from "@angular/core";
import { AuthService} from '../../controller/service/auth.service';
import {FormGroup, FormControl, FormBuilder, Validators, NgForm} from '@angular/forms';
import { RouterModule,Route, Router, ActivatedRoute} from '@angular/router';
import { Admin } from '../../model/admin'

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

  admin: Admin [] =
  [
    { _id:"1", username:'admin', password:'admin'},
   ]

  loginForm: FormGroup;
  constructor(private fb: FormBuilder,
    private myRoute: Router,
    private auth: AuthService,
    private route: ActivatedRoute) {
    this.loginForm = fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.maxLength(8)]),
    });
  }

  ngOnInit() {
   // this.getAdmin(this.route.snapshot.params['user'], this.route.snapshot.params['pass'])
  }

  login() {    if (this.loginForm.valid) {
      this.auth.sendToken(this.loginForm.value.user)
      this.myRoute.navigate(['/mainpage']);
    }
  }

  getAdmin(form : NgForm){
    this.myRoute.navigate(['/admin-playerlist']);
   /* for (let i=0 ; i< this.admin.length; i++){
      if( this.admin[i].username == user && this.admin[i].password == pass){
        this.myRoute.navigate(['/'])
      }
    }*/
  }
}
