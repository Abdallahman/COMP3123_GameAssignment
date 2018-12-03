import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import {HttpClient } from '@angular/common/http';

import { Player } from '../player';
import { PLAYERS } from '../mock-players';



@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }
 /*
  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }


  getUser(userID){
    return this.http.get('https://jsonplaceholder.typicode.com/users'+userID)
  }
  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }*/

  addplayer(player,rank, score, time,gamePlayed,status ){
    const obj={
        player: player,
        rank: rank,
        time: time,
        gamePlayed: gamePlayed,
        status: status
    }
    
  }

}

