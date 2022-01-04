import { TestBed } from '@angular/core/testing';

import { FavouriteService } from './favourite.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('FavouriteService', () => {
  let service: FavouriteService;
  console.log("Unit FavouriteService Test start");

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.inject(FavouriteService);
  });
/*
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
 */

});
