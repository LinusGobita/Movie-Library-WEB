import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../service/movies.service";
import {Movie} from "../../model/Movie";

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  movies: Array<Movie>=[];

  constructor(
    private movieServices: MoviesService,
  ) { }

  ngOnInit(): void {
    this.getMovies()
  }

  getMovies() {
    fetch(this.movieServices.getPopular()).then(res => res.json()).then(data =>{
      this.movies = data.results;
      console.log("popular =" + data.results)
    })

  }
}
