import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteComponent } from './favourite.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MoviesComponent} from "../movies/movies.component";

describe('FavouriteComponent', () => {
  let component: FavouriteComponent;
  let fixture: ComponentFixture<FavouriteComponent>;

  console.log("Unit FavouriteComponent Test start");
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ FavouriteComponent, MoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
