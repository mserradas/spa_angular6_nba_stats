import { TestBed, inject } from '@angular/core/testing';

import { NbaStatsService } from './nba-stats.service';

describe('NbaStatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NbaStatsService]
    });
  });

  it('should be created', inject([NbaStatsService], (service: NbaStatsService) => {
    expect(service).toBeTruthy();
  }));
});
