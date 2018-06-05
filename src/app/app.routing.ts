import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerDetailComponent } from './components/player-detail/player-detail.component';

const appRoutes: Routes = [
    {path: '', component: PlayerListComponent},
    {path: 'player-detail/:PlayerID', component: PlayerDetailComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);