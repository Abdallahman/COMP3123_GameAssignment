import { Component, OnInit } from '@angular/core';
import { GameService } from '../../controller/service/game.service';
//import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../../controller/service/player.service'
import { Player } from '../../model/player';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Game } from '../../model/game'


@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss'],
  providers:[PlayerService, GameService]
})
export class PlayerDetailsComponent implements OnInit {
  
  player: {};
 
  //selectedPlayer: Player;

  ranks = [1,2,3,4,5];
  statusChoice =['Available','Unavailable']



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

      
  getListToUpdate(id) {
    this.playerService.getPlayerEdit(id).subscribe( res => {
      this.player = res;
    })
  }

  refreshGameList() {
    this.gameService.getGameList().subscribe((res) => {
      this.gameService.games = res as Game[];
    }
    );
  
   
  }
  
}
