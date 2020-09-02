import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParmaddComponent } from './parmadd.component';

describe('ParmaddComponent', () => {
  let component: ParmaddComponent;
  let fixture: ComponentFixture<ParmaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParmaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParmaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
