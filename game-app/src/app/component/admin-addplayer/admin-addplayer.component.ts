import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs';

// Forms
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NgForm} from '@angular/forms';


//Services
import {GameService} from '../../controller/service/game.service';
import { PlayerService } from '../../controller/service/player.service';

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

 // model = new Player("Player Name",this.ranks[0],1,"Time",this.games[0],this.status1[0]);
 showSuccessMessage: boolean;
 serverErrorMessages: string;
constructor(private playerService: PlayerService) { }

 //get diagnostic(){return JSON.stringify(this.model);}

 resetForm(form?: NgForm) {
   if(form)
   form.reset();
   this.playerService.selectedPlayer = {
     _id:"",
     player_name:"",
     rank: null,
     score: null,
     time: "",
     game_Played: "",
     status: ""
   }
 }

 onSubmit(form: NgForm) {
   this.playerService.postPlayer(form.value).subscribe( res => {
     this.showSuccessMessage = true;
     setTimeout(() => this.showSuccessMessage = false, 4000)
   },
   err => {
     

   }
   )   
   this.resetForm(form)
   //M.toast({'saved successully', })
   
 }

 
}

