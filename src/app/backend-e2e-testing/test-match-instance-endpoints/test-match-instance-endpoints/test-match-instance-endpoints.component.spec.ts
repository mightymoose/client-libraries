import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMatchInstanceEndpointsComponent } from './test-match-instance-endpoints.component';

describe('TestMatchInstanceEndpointsComponent', () => {
  let component: TestMatchInstanceEndpointsComponent;
  let fixture: ComponentFixture<TestMatchInstanceEndpointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMatchInstanceEndpointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMatchInstanceEndpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
