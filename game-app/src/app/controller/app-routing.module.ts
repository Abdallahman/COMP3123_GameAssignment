import { BrowserModule } from '@angular/platform-browser';
import { NgModule }  from '@angular/core';

import { AppComponent } from '../app.component';
import { RouterModule, Routes } from '@angular/router';

//bootstrap
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Components
import { HeaderComponent } from '../component/header/header.component';
import { PlayerListComponent } from '../component/player-list/player-list.component';
import { AdminloginComponent } from '../component/adminlogin/adminlogin.component';
import { MainpageComponent} from '../component/mainpage/mainpage.component';
import { AdminAddplayerComponent} from '../component/admin-addplayer/admin-addplayer.component';
import { AdminEditplayerComponent} from '../component/admin-editplayer/admin-editplayer.component';
import { AdminGamelistComponent} from'../component/admin-gamelist/admin-gamelist.component';
import { AdminPlayerlistComponent} from '../component/admin-playerlist/admin-playerlist.component';
//import {FooterComponent} from '../component/footer/footer.component';
import {PlayerDetailsComponent} from '../component/player-details/player-details.component';
import { AdminMainpageComponent} from '../component/admin-mainpage/admin-mainpage.component';

//Guard
//import { AdminGuard } from '../component/adminlogin/adminlogin.guard';

const appRoutes: Routes=[
{path: "",  redirectTo:'app-root', pathMatch:'full'},
{path: "adminlogin", component: AdminloginComponent},
{path:'mainpage' ,component: MainpageComponent },
{path:'player-list', component: PlayerListComponent},
{path:'admin-mainpage', component: AdminMainpageComponent},
{path:'admin-addplayer',/*canActivate:[AdminGuard],*/ component:AdminAddplayerComponent},
{path:'admin-editplayer/:id',/*canActivate:[AdminGuard],*/  component:AdminEditplayerComponent},
{path:'admin-gamelist', /*canActivate:[AdminGuard],*/ component:AdminGamelistComponent},
{path: 'admin-playerlist', /*canActivate:[AdminGuard],*/ component: AdminPlayerlistComponent},
{path: 'players/:id', component: PlayerDetailsComponent},
{path: 'editplayers/:id', /*canActivate:[AdminGuard],*/ component: AdminEditplayerComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }