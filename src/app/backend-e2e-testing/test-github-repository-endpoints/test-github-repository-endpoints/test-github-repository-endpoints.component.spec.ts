import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGithubRepositoryEndpointsComponent } from './test-github-repository-endpoints.component';

describe('TestGithubRepositoryEndpointsComponent', () => {
  let component: TestGithubRepositoryEndpointsComponent;
  let fixture: ComponentFixture<TestGithubRepositoryEndpointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestGithubRepositoryEndpointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGithubRepositoryEndpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
