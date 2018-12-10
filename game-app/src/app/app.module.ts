import { BrowserModule } from '@angular/platform-browser';
import { NgModule }  from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { from } from 'rxjs';


//bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//Routing
import { AppRoutingModule } from './controller/app-routing.module';

// Forms:
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from  '@angular/forms';

// Components
import { MainpageComponent } from './component/mainpage/mainpage.component';
import { PlayerDetailsComponent } from './component/player-details/player-details.component';
import { AdminPlayerlistComponent } from './component/admin-playerlist/admin-playerlist.component';
import { AdminEditplayerComponent } from './component/admin-editplayer/admin-editplayer.component';
import { AdminAddplayerComponent } from './component/admin-addplayer/admin-addplayer.component';
import { AdminGamelistComponent } from './component/admin-gamelist/admin-gamelist.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { PlayerListComponent } from './component/player-list/player-list.component';
import { AdminloginComponent } from './component/adminlogin/adminlogin.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { AdminMainpageComponent } from './component/admin-mainpage/admin-mainpage.component';
// Service
import {GameService} from './controller/service/game.service'
import {AuthService} from './controller/service/auth.service';

//Search
import { Ng2SearchPipeModule } from 'ng2-search-filter';
//import { AdminMainpageComponent } from './component/admin-mainpage/admin-mainpage.component';

// Guard
//import { AdminGuard } from './component/adminlogin/adminlogin.guard';
//import { MockAdminComponent } from './mock-admin/mock-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlayerListComponent,
    AdminloginComponent,
    PageNotFoundComponent,
    MainpageComponent,
    PlayerDetailsComponent,
    AdminPlayerlistComponent,
    AdminEditplayerComponent,
    AdminAddplayerComponent,
    AdminGamelistComponent,
    FooterComponent,
    AdminMainpageComponent,
   // MockAdminComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule, 
    Ng2SearchPipeModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

