import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUserEndpointsComponent } from './test-user-endpoints.component';

describe('TestUserEndpointsComponent', () => {
  let component: TestUserEndpointsComponent;
  let fixture: ComponentFixture<TestUserEndpointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestUserEndpointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestUserEndpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
