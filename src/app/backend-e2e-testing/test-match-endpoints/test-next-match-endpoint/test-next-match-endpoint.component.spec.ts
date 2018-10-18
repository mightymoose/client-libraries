import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNextMatchEndpointComponent } from './test-next-match-endpoint.component';

describe('TestNextMatchEndpointComponent', () => {
  let component: TestNextMatchEndpointComponent;
  let fixture: ComponentFixture<TestNextMatchEndpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNextMatchEndpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNextMatchEndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
