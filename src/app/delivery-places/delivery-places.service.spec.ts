import { TestBed } from '@angular/core/testing';

import { DeliveryPlacesService } from './delivery-places.service';

describe('DeliveryPlacesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeliveryPlacesService = TestBed.get(DeliveryPlacesService);
    expect(service).toBeTruthy();
  });
});
