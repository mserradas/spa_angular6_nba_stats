import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

//Services
import { NbaStatsService } from '../../services/nba-stats/nba-stats.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  
  PlayerID = '';
  public player: any = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private nbastatsService: NbaStatsService,
    private toaster: ToastrService) {
      this.PlayerID = this.route.snapshot.params['PlayerID'];
  }

  ngOnInit() {
    this.getPlayerDetail(); 
  }

//Function Player Detail
  getPlayerDetail(){
    this.nbastatsService.getPlayerDetail(this.PlayerID)
    .subscribe((response) => {
      this.player = response;
      this.player = Object.keys(this.player).map((key) => this.player[key]);
      this.player = this.player[2];
      this.player = this.player[0];
      this.player = this.player.rowSet[0];
    },
    error => {
      if (error['status'] === 200) {
        this.toaster.error('Internal error in the server, Access denied', 'Unsuccessful Connection', {
          closeButton: true,
          progressBar: true,
          });
      }
    });
  }

}
