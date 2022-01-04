import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularComponent } from './popular.component';
import {MoviesComponent} from "../movies/movies.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('PopularComponent', () => {
  let component: PopularComponent;
  let fixture: ComponentFixture<PopularComponent>;
  console.log("Unit PopularComponent Test start");
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ PopularComponent, MoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
