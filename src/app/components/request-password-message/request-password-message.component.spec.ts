import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestPasswordMessageComponent } from './request-password-message.component';

describe('RequestPasswordMessageComponent', () => {
  let component: RequestPasswordMessageComponent;
  let fixture: ComponentFixture<RequestPasswordMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestPasswordMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestPasswordMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
