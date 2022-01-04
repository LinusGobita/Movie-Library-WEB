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

  it('Img url check"', () => {
    expect(service.getImgUrl()).toEqual("https://image.tmdb.org/t/p/w500");
  });
   it('AllGenresUrl url check"', () => {
    expect(service.getAllGenresUrl()).toEqual("https://api.themoviedb.org/3/genre/movie/list?api_key=b1ab1203863d0124d4bc7d33d3c3311b");
  });

});
