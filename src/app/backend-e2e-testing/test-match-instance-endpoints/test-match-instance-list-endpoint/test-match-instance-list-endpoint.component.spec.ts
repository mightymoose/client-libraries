import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMatchInstanceListEndpointComponent } from './test-match-instance-list-endpoint.component';

describe('TestMatchInstanceListEndpointComponent', () => {
  let component: TestMatchInstanceListEndpointComponent;
  let fixture: ComponentFixture<TestMatchInstanceListEndpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMatchInstanceListEndpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMatchInstanceListEndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
