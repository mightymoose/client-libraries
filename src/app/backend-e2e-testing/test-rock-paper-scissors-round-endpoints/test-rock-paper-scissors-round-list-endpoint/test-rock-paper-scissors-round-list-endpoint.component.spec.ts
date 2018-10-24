import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRockPaperScissorsRoundListEndpointComponent } from './test-rock-paper-scissors-round-list-endpoint.component';

describe('TestRockPaperScissorsRoundListEndpointComponent', () => {
  let component: TestRockPaperScissorsRoundListEndpointComponent;
  let fixture: ComponentFixture<TestRockPaperScissorsRoundListEndpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRockPaperScissorsRoundListEndpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRockPaperScissorsRoundListEndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
