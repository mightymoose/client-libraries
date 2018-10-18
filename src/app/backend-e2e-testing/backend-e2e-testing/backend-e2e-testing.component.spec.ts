import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendE2eTestingComponent } from './backend-e2e-testing.component';

describe('BackendE2eTestingComponent', () => {
  let component: BackendE2eTestingComponent;
  let fixture: ComponentFixture<BackendE2eTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendE2eTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendE2eTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
