import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlayerDetailComponent } from './components/player-detail/player-detail.component';
import { PlayerListComponent } from './components/player-list/player-list.component';

//Services
import { NbaStatsService } from './services/nba-stats/nba-stats.service';

// Router
import { routing, appRoutingProviders } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlayerDetailComponent,
    PlayerListComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    appRoutingProviders,
    NbaStatsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule{}