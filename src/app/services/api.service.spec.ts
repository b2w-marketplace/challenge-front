/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import 'rxjs/add/operator/toPromise';
import { ApiService } from './api.service';
import { HttpModule } from '@angular/http';

describe('Service: Api', () => {
  let service: ApiService = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ApiService]
    });
  });

  beforeEach(inject([ApiService], (apiService: ApiService) => {
   service = apiService;
  }));

  it('should bring property name from the API', (done) => {
    service.loadData().subscribe(resp => {
      expect(resp.name.toUpperCase()).toBe("JOHN XPTO")
      done();
    })
  }, 10000);
});
