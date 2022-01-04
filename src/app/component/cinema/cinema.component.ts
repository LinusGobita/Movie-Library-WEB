import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../service/movies.service";
import {Movie} from "../../model/Movie";


@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {


  categorie: string = "cinema";
  movies: Array<Movie> = [];

  constructor(
    private movieServices: MoviesService
  ) {
  }

  ngOnInit(): void {
    this.getMovies()
  }

  getMovies() {
    this.movieServices.getCinemaMovies().subscribe((response) =>
      this.movies = response.results);
    //console.log("cinema movies"+this.movies);
  }

}
