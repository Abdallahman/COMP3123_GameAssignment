import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../controller/service/player.service';
import { Player } from '../../model/player';
@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
  providers:[PlayerService]
})
export class PlayerListComponent implements OnInit {
 
  showJoinBox: boolean;

  constructor(private playerService : PlayerService) {}
      
    ngOnInit() {
     this.refreshPlayerList(); 
    }

    refreshPlayerList() {
      this.playerService.getPlayerList().subscribe((res) => {
        this.playerService.players = res as Player[];
      }
      );
    }

    onJoin( play : Player): void{
      // this.playerService = play;
     }
    
  
}
