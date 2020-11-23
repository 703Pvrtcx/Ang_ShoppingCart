import { TestBed } from '@angular/core/testing';

import { UploadMetaService } from './upload-meta.service';

describe('UploadMetaService', () => {
  let service: UploadMetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadMetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
