import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUpdateMatchEndpointComponent } from './test-update-match-endpoint.component';

describe('TestUpdateMatchEndpointComponent', () => {
  let component: TestUpdateMatchEndpointComponent;
  let fixture: ComponentFixture<TestUpdateMatchEndpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestUpdateMatchEndpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestUpdateMatchEndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
