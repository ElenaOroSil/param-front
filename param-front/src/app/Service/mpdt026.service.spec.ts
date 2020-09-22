import { TestBed } from '@angular/core/testing';

import { Mpdt026Service } from './mpdt026.service';

describe('Mpdt026Service', () => {
  let service: Mpdt026Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mpdt026Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
