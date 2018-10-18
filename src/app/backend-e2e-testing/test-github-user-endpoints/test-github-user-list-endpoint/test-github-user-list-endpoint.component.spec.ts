import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGithubUserListEndpointComponent } from './test-github-user-list-endpoint.component';

describe('TestGithubUserListEndpointComponent', () => {
  let component: TestGithubUserListEndpointComponent;
  let fixture: ComponentFixture<TestGithubUserListEndpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestGithubUserListEndpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGithubUserListEndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
