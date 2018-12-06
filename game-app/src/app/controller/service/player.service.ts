import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


//Observable 
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Player } from '../../model/player'
@Injectable({
  providedIn: 'root'
})
export class PlayerService {
selectedPlayer: Player = {
  _id: '',
    player_name : '',
    rank: null,
    score: null,
    time: '',
    game_Played :'',
    status : ''  

};
players: Player[];
readonly baseURL = 'http://localhost:3000/players/';

  constructor(private http : HttpClient) {}

  postPlayer(play : Player) {
    return this.http.post(this.baseURL, play)
  }

  getPlayerList() {
    return this.http.get(this.baseURL)
  }
  
  // this function allow to edit the player
  getPlayerEdit(id){
    return this.http.get(this.baseURL+''+id)
  }

  // this function allow to delete player 

  getPlayerDelete(id){
    return this.http.delete(this.baseURL+''+id);
  }

  getPlayerUpdated(id){
   // return this.http.put(this.baseURL+'/'+id)
  }

  
}
