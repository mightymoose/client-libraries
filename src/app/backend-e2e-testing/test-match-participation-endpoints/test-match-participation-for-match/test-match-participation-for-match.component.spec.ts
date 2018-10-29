import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMatchParticipationForMatchComponent } from './test-match-participation-for-match.component';

describe('TestMatchParticipationForMatchComponent', () => {
  let component: TestMatchParticipationForMatchComponent;
  let fixture: ComponentFixture<TestMatchParticipationForMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMatchParticipationForMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMatchParticipationForMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
