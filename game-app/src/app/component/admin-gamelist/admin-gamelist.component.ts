import { Component, OnInit } from '@angular/core';
import { GameService } from '../../controller/service/game.service'
import { Game } from '../../model/game'
@Component({
  selector: 'app-admin-gamelist',
  templateUrl: './admin-gamelist.component.html',
  styleUrls: ['./admin-gamelist.component.scss'],
  providers:[GameService]
})
export class AdminGamelistComponent implements OnInit {

  constructor(private gameService : GameService) { }

  ngOnInit() {
    this.refreshGameList();
  }

  refreshGameList() {
    this.gameService.getGameList().subscribe((res) => {
      this.gameService.games = res as Game[];
    }
    );
  }
}
