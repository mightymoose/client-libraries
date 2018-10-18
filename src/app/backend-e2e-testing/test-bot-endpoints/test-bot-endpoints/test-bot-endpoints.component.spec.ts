import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBotEndpointsComponent } from './test-bot-endpoints.component';

describe('TestBotEndpointsComponent', () => {
  let component: TestBotEndpointsComponent;
  let fixture: ComponentFixture<TestBotEndpointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBotEndpointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBotEndpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
