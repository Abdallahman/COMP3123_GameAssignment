import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Forms
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NgForm} from '@angular/forms';


//Services
import {GameService} from '../../controller/service/game.service';
import { PlayerService } from '../../controller/service/player.service';
import { Game } from '../../model/game'

@Component({
  selector: 'app-admin-addplayer',
  templateUrl: './admin-addplayer.component.html',
  styleUrls: ['./admin-addplayer.component.scss'],
  providers:[GameService, PlayerService]
})
export class AdminAddplayerComponent {


 
  ranks = [1,2,3,4,5];
  statusChoice=["Available","Unavailable"]

 
 showSuccessMessage: boolean;
 serverErrorMessages: string;
constructor(private playerService : PlayerService, 
            private router: Router, 
            private route: ActivatedRoute,
            private gameService : GameService,
            private fb: FormBuilder) { 

  }
  
ngOnInit() {
  this.getListToUpdate(this.route.snapshot.params['id']);
  this.refreshGameList();
 }

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

 getListToUpdate(id) {
  this.playerService.getPlayerEdit(id).subscribe( res => {
    
  })
}

refreshGameList() {
  this.gameService.getGameList().subscribe((res) => {
    this.gameService.games = res as Game[];
  }
  );

  
}
}
