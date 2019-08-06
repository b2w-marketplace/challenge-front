import { TestBed } from '@angular/core/testing';

import { CurriculumVitaeService } from './curriculum-vitae.service';

describe('CurriculumVitaeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurriculumVitaeService = TestBed.get(CurriculumVitaeService);
    expect(service).toBeTruthy();
  });
});
