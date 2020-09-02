import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParmlistComponent } from './parmlist.component';

describe('ParmlistComponent', () => {
  let component: ParmlistComponent;
  let fixture: ComponentFixture<ParmlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParmlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParmlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
