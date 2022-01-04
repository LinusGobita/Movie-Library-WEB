import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreComponent } from './genre.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {MoviesComponent} from "../movies/movies.component";
import {NgbCarousel} from "@ng-bootstrap/ng-bootstrap";

describe('GenreComponent', () => {
  let component: GenreComponent;
  let fixture: ComponentFixture<GenreComponent>;
  console.log("Unit GenreComponent Test start");
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule],
      declarations: [ GenreComponent, MoviesComponent, NgbCarousel ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
