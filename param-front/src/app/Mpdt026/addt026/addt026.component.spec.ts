import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addt026Component } from './addt026.component';

describe('Addt026Component', () => {
  let component: Addt026Component;
  let fixture: ComponentFixture<Addt026Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addt026Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addt026Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
