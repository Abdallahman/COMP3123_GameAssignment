import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../controller/service/player.service';
import { Player } from '../../model/player';


@Component({
  selector: 'app-admin-playerlist',
  templateUrl: './admin-playerlist.component.html',
  styleUrls: ['./admin-playerlist.component.scss'],
  providers:[PlayerService]
})
export class AdminPlayerlistComponent implements OnInit {

  constructor(private playerService : PlayerService) { }

  ngOnInit() {
    this.refreshPlayerList(); 
   }

   refreshPlayerList() {
     this.playerService.getPlayerList().subscribe((res) => {
       this.playerService.players = res as Player[];
     }
     );
   }

}
