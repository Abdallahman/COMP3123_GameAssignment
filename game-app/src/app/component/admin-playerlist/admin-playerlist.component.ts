import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../controller/service/player.service';
import { Player } from '../../model/player';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-playerlist',
  templateUrl: './admin-playerlist.component.html',
  styleUrls: ['./admin-playerlist.component.scss'],
  providers:[PlayerService]
})
export class AdminPlayerlistComponent implements OnInit {

  constructor(private playerService : PlayerService,
    private router: Router, 
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.refreshPlayerList(); 
    this.onDeletePlayer(this.route.snapshot.params['id']);
   }

   refreshPlayerList() {
     this.playerService.getPlayerList().subscribe((res) => {
       this.playerService.players = res as Player[];
     }
     );
   }

   // This method call the http method that are deleting the data
   onDeletePlayer(id){
     this.playerService.getPlayerDelete(id).subscribe(res => {
      
     })
    }

}
