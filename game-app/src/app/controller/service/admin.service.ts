import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


//Observable 
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Admin } from '../../model/admin'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  selectedAdmin: Admin = {
      _id: '',
      username : '',
      password : ''  
  
  };
  admin: Admin[];
  readonly baseURL = 'http://localhost:3000/admin/';

  constructor(private http: HttpClient) { }

  getAdminLogin(user, pass){
    this.http.get(this.baseURL+user+'&'+pass);
  }

}
