import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

//services
import { NbaStatsService } from '../../services/nba-stats/nba-stats.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  public players:any = [];
  public PlayerForm: FormGroup;
  public formErrors;

  constructor(
    private nbastatsService: NbaStatsService,
    private toaster: ToastrService,
    private formBuilder: FormBuilder) {
      
    }

  ngOnInit() {

    this.formErrors = {
      PerMode: {},
      LeagueID: {},
      Season: {},
      SeasonType: {}
    };

    this.PlayerForm = this.formBuilder.group({
      PerMode: 'Totals',
      LeagueID: '00',
      Season: ['2017-18', [Validators.required, Validators.maxLength(7), Validators.minLength(7), Validators.pattern(/^\d{4}-\d{2}$/)]],
      SeasonType: 'Regular Season',
    });

    this.PlayerForm.valueChanges.subscribe(() => {
      this.onFormValuesChanged();
    });

    this.getPlayersList();
  }

//Function Get Player List
  getPlayersList(){
    this.nbastatsService.getPlayersList(this.PlayerForm.value)
    .subscribe((response) => {
      this.players = response;
      this.players = Object.keys(this.players).map((key) => this.players[key]);
      this.players = this.players[2];
      this.players = this.players[0];
      this.players = this.players['rowSet'];
    },
    error => {
      if (error['status'] === 200){
        this.toaster.error('Internal error in the server, Access denied', 'Unsuccessful Connection', {
          closeButton: true,
          progressBar: true,
          });
      }
    });
  }

  onFormValuesChanged() {
    for (const field in this.formErrors) {
      if (!this.formErrors.hasOwnProperty(field)) {
        continue;
      }
      // Clear previous errors
      this.formErrors[field] = {};

      // Get the control
      const control = this.PlayerForm.get(field);

      if (control && control.dirty && !control.valid) {
        this.formErrors[field] = control.errors;
      }
    }
  }
}
