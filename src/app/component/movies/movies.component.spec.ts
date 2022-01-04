import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesComponent } from './movies.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";


describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;
  console.log("Unit MoviesComponent Test start");
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ MoviesComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*
  it("add favourite", ()=> {
    const movieTest = {
      adult: true,
      backdrop_path: "test",
      genre_ids: [1, 2, 3];
      id: 123,
      _id: 123,
      original_language: "test",
      original_title: "test",
      overview: "test",
      popularity: 123,
      poster_path: "test",
      release_date: "test",
      title: "test",
      video: true,
      vote_average: 123,
      vote_count: 123

    }
    component.addFavorite(movieTest);
  })
   */

});
