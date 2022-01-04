import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CinemaComponent} from './cinema.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {MoviesComponent} from "../movies/movies.component";
import {SliderComponent} from "../slider/slider.component";
import {NgbCarousel} from "@ng-bootstrap/ng-bootstrap";


describe('CinemaComponent', () => {
  let component: CinemaComponent;
  let fixture: ComponentFixture<CinemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [CinemaComponent, NgbCarousel, MoviesComponent, SliderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Movies inside Movies Array", () => {
    component.getMovies();
    expect(component.movies).toHaveSize(0);
  })



});
