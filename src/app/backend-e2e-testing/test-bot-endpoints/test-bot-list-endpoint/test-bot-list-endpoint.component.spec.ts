import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBotListEndpointComponent } from './test-bot-list-endpoint.component';

describe('TestBotListEndpointComponent', () => {
  let component: TestBotListEndpointComponent;
  let fixture: ComponentFixture<TestBotListEndpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBotListEndpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBotListEndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
