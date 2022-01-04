import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../service/movies.service";
import {Movie} from "../../model/Movie";

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {


  categorie: string = "popular";
  movies: Array<Movie>=[];

  constructor(
    private movieServices: MoviesService
  ) { }

  ngOnInit(): void {
    this.getMovies()
  }

  getMovies() {
    //null eventuell noch ausblenden
    this.movieServices.getPopularMovies().subscribe((response) => this.movies = response.results);
    //console.log("cinema movies"+this.movies);
  }

}

