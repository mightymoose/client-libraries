import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMatchDetailsEndpointComponent } from './test-match-details-endpoint.component';

describe('TestMatchDetailsEndpointComponent', () => {
  let component: TestMatchDetailsEndpointComponent;
  let fixture: ComponentFixture<TestMatchDetailsEndpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMatchDetailsEndpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMatchDetailsEndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
