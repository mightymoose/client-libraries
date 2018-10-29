import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMatchParticipationEndpointsComponent } from './test-match-participation-endpoints.component';

describe('TestMatchParticipationEndpointsComponent', () => {
  let component: TestMatchParticipationEndpointsComponent;
  let fixture: ComponentFixture<TestMatchParticipationEndpointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMatchParticipationEndpointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMatchParticipationEndpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
