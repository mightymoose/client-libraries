import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMatchEndpointsComponent } from './test-match-endpoints.component';

describe('TestMatchEndpointsComponent', () => {
  let component: TestMatchEndpointsComponent;
  let fixture: ComponentFixture<TestMatchEndpointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMatchEndpointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMatchEndpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
