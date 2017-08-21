import { TestBed, inject } from '@angular/core/testing';

import { FigureDataService } from './figure-data.service';

describe('FigureDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FigureDataService]
    });
  });

  it('should ...', inject([FigureDataService], (service: FigureDataService) => {
    expect(service).toBeTruthy();
  }));
});
