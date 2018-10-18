import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGithubUserEndpointsComponent } from './test-github-user-endpoints.component';

describe('TestGithubUserEndpointsComponent', () => {
  let component: TestGithubUserEndpointsComponent;
  let fixture: ComponentFixture<TestGithubUserEndpointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestGithubUserEndpointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGithubUserEndpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
