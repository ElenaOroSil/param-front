import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarprodComponent } from './listarprod.component';

describe('ListarprodComponent', () => {
  let component: ListarprodComponent;
  let fixture: ComponentFixture<ListarprodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarprodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
