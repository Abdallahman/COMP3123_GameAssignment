import { Component, OnInit } from '@angular/core';
import { Player1 } from 'src/app/controller/player1';
//import { Player } from 'src/app/controller/player';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {GameService} from '../../controller/service/game.service';
import { Observable } from 'rxjs';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-admin-addplayer',
  templateUrl: './admin-addplayer.component.html',
  styleUrls: ['./admin-addplayer.component.scss']
})
export class AdminAddplayerComponent {

  //playerForm: FormGroup;
 
  ranks = [1,2,3,4,5,6,7,8,9,10];
  games = ["Game 1","Game 2","Game 3","Game 4"]
  status1=["Available","Unavailable"]

  model = new Player1("Player Name",this.ranks[0],1,"Time",this.games[0],this.status1[0]);
  constructor(){

  }

  ngOnIntit(){
    /*this.playerForm = new FormGroup({
      player : new FormControl(),
      rank : new FormControl(),
      score : new FormControl(),
      time : new FormControl(),
      game: new FormControl(),
      status: new FormControl()
    });*/
  }

  submited = false;
  onSublint(){this.submited=true;}

  get diagnostic(){return JSON.stringify(this.model);}
}

