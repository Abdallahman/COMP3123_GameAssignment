import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Player1 } from 'src/app/model/player1';
import {DataControle} from '../../../../backend/DataController';


@Component({
  selector: 'app-admin-editplayer',
  templateUrl: './admin-editplayer.component.html',
  styleUrls: ['./admin-editplayer.component.scss']
})
export class AdminEditplayerComponent{

  
  constructor() { }

  ngOnInit() {
  }

}
