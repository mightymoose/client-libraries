import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMatchListEndpointComponent } from './test-match-list-endpoint.component';

describe('TestMatchListEndpointComponent', () => {
  let component: TestMatchListEndpointComponent;
  let fixture: ComponentFixture<TestMatchListEndpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMatchListEndpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMatchListEndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
