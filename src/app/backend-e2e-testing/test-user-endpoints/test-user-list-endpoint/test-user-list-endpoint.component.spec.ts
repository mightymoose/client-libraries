import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUserListEndpointComponent } from './test-user-list-endpoint.component';

describe('TestUserListEndpointComponent', () => {
  let component: TestUserListEndpointComponent;
  let fixture: ComponentFixture<TestUserListEndpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestUserListEndpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestUserListEndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
