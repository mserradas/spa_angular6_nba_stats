import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//components
import { PlayerListComponent } from '../player-list/player-list.component';
import { PlayerDetailComponent } from './player-detail.component';

describe('PlayerDetailComponent', () => {
  let component: PlayerDetailComponent;
  let fixture: ComponentFixture<PlayerDetailComponent>;

  beforeEach(async(() => {
    const routes: Routes = [
      { path: '/', component: PlayerListComponent },
    ];
    TestBed.configureTestingModule({
      declarations: [ PlayerDetailComponent, PlayerListComponent ],
      imports: [
        RouterModule.forRoot(routes)
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
