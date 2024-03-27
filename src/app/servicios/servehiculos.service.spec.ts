/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServehiculosService } from './servehiculos.service';

describe('Service: Servehiculos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServehiculosService]
    });
  });

  it('should ...', inject([ServehiculosService], (service: ServehiculosService) => {
    expect(service).toBeTruthy();
  }));
});
