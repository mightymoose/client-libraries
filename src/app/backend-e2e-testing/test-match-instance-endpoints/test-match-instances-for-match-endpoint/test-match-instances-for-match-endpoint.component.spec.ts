import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMatchInstancesForMatchEndpointComponent } from './test-match-instances-for-match-endpoint.component';

describe('TestMatchInstancesForMatchEndpointComponent', () => {
  let component: TestMatchInstancesForMatchEndpointComponent;
  let fixture: ComponentFixture<TestMatchInstancesForMatchEndpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMatchInstancesForMatchEndpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMatchInstancesForMatchEndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
