import { TestBed, inject } from '@angular/core/testing';

import { TagsServiceService } from './tags-service.service';

describe('TagsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TagsServiceService]
    });
  });

  it('should be created', inject([TagsServiceService], (service: TagsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
