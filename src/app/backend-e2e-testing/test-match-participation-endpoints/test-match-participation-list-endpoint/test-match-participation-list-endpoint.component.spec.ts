import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMatchParticipationListEndpointComponent } from './test-match-participation-list-endpoint.component';

describe('TestMatchParticipationListEndpointComponent', () => {
  let component: TestMatchParticipationListEndpointComponent;
  let fixture: ComponentFixture<TestMatchParticipationListEndpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMatchParticipationListEndpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMatchParticipationListEndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
