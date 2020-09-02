import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParmeditComponent } from './parmedit.component';

describe('ParmeditComponent', () => {
  let component: ParmeditComponent;
  let fixture: ComponentFixture<ParmeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParmeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParmeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
