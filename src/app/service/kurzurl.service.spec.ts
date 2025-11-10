import { TestBed } from '@angular/core/testing';

import { KurzurlService } from './kurzurl.service';

describe('KurzurlService', () => {
  let service: KurzurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KurzurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
