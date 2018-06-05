import { NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

@Component({selector: 'router-outlet', template: ''})
class RouterOutletStubComponent { }

describe('App: AquaparkFrontend', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RouterOutletStubComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
  });

});
