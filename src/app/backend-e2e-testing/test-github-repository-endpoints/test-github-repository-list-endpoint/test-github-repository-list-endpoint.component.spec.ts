import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGithubRepositoryListEndpointComponent } from './test-github-repository-list-endpoint.component';

describe('TestGithubRepositoryListEndpointComponent', () => {
  let component: TestGithubRepositoryListEndpointComponent;
  let fixture: ComponentFixture<TestGithubRepositoryListEndpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestGithubRepositoryListEndpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGithubRepositoryListEndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
