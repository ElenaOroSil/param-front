import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Edit026Component } from './edit026.component';

describe('Edit026Component', () => {
  let component: Edit026Component;
  let fixture: ComponentFixture<Edit026Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Edit026Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Edit026Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
