import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsePasswordMessageComponent } from './response-password-message.component';

describe('ResponsePasswordMessageComponent', () => {
  let component: ResponsePasswordMessageComponent;
  let fixture: ComponentFixture<ResponsePasswordMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsePasswordMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsePasswordMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
