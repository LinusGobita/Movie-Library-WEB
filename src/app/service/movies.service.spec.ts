import { TestBed } from '@angular/core/testing';

import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;
  console.log("Unit MoviesService Test start");

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
