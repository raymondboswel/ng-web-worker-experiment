import { TestBed } from '@angular/core/testing';

import { TringService } from './tring.service';

describe('TringService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TringService = TestBed.get(TringService);
    expect(service).toBeTruthy();
  });
});
