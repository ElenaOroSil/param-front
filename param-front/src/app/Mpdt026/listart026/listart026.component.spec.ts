import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Listart026Component } from './listart026.component';

describe('Listart026Component', () => {
  let component: Listart026Component;
  let fixture: ComponentFixture<Listart026Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Listart026Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Listart026Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
