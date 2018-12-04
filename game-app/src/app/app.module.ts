import { BrowserModule } from '@angular/platform-browser';
import { NgModule }  from '@angular/core';
import { FormsModule }   from  '@angular/forms';
//import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './controller/app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Forms:

import { ReactiveFormsModule } from '@angular/forms';


// Components
import { MainpageComponent } from './component/mainpage/mainpage.component';
import { PlayerDetailsComponent } from './component/player-details/player-details.component';
import { AdminPalyerlistComponent } from './component/admin-palyerlist/admin-palyerlist.component';
import { AdminEditplayerComponent } from './component/admin-editplayer/admin-editplayer.component';
import { AdminAddplayerComponent } from './component/admin-addplayer/admin-addplayer.component';
import { AdminGamelistComponent } from './component/admin-gamelist/admin-gamelist.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { PlayerListComponent } from './component/player-list/player-list.component';
import { AdminloginComponent } from './component/adminlogin/adminlogin.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

// Service
import {GameService} from './controller/service/game.service'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlayerListComponent,
    AdminloginComponent,
    PageNotFoundComponent,
    MainpageComponent,
    PlayerDetailsComponent,
    AdminPalyerlistComponent,
    AdminEditplayerComponent,
    AdminAddplayerComponent,
    AdminGamelistComponent,
    FooterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
