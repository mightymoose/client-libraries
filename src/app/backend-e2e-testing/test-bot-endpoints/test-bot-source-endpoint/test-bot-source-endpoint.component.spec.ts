import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBotSourceEndpointComponent } from './test-bot-source-endpoint.component';

describe('TestBotSourceEndpointComponent', () => {
  let component: TestBotSourceEndpointComponent;
  let fixture: ComponentFixture<TestBotSourceEndpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBotSourceEndpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBotSourceEndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
