import { TestBed } from '@angular/core/testing';
import { MoviesService } from './movies.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('MoviesService', () => {
  let service: MoviesService;

  console.log("Unit MoviesService Test start");
  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],

    });
    service = TestBed.inject(MoviesService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
