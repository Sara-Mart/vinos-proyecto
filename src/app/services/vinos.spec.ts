import { TestBed } from '@angular/core/testing';

import { Vinos } from './vinos';

describe('Vinos', () => {
  let service: Vinos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Vinos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
