import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMostRecentInstanceForMatchEndpointComponent } from './test-most-recent-instance-for-match-endpoint.component';

describe('TestMostRecentInstanceForMatchEndpointComponent', () => {
  let component: TestMostRecentInstanceForMatchEndpointComponent;
  let fixture: ComponentFixture<TestMostRecentInstanceForMatchEndpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMostRecentInstanceForMatchEndpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMostRecentInstanceForMatchEndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
