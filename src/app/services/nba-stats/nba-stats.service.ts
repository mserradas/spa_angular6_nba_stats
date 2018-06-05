import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NbaStatsService {

  private API_URL: string = 'http://stats.nba.com/stats';

  constructor(
    public http: HttpClient) {}

// Function Get Players
  public getPlayersList(PlayerForm){

    const PerMode = PlayerForm.PerMode;
    const LeagueID = PlayerForm.LeagueID;
    const Season = PlayerForm.Season;
    const SeasonType = PlayerForm.SeasonType;

    return this.http.get(this.API_URL + `/leaguedashplayerbiostats/?PerMode=${PerMode}&LeagueID=${LeagueID}&Season=${Season}&SeasonType=${SeasonType}`);
  }

// Function Get Player Detail
  public getPlayerDetail(PlayerID){
    return this.http.get(this.API_URL+`/commonplayerinfo/?PlayerID=${PlayerID}`);
  }

}
