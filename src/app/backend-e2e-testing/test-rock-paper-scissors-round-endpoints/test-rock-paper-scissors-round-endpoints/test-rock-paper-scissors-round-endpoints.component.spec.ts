import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRockPaperScissorsRoundEndpointsComponent } from './test-rock-paper-scissors-round-endpoints.component';

describe('TestRockPaperScissorsRoundEndpointsComponent', () => {
  let component: TestRockPaperScissorsRoundEndpointsComponent;
  let fixture: ComponentFixture<TestRockPaperScissorsRoundEndpointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRockPaperScissorsRoundEndpointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRockPaperScissorsRoundEndpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
