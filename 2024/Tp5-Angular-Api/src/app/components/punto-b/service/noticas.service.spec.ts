import { TestBed } from '@angular/core/testing';

import { NoticasService } from './noticas.service';

describe('NoticasService', () => {
  let service: NoticasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoticasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
