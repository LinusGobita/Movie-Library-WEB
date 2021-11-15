import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../service/movies.service";
import {Genre} from "../../model/Genre";
import {Movie} from "../../model/Movie";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  genres: Array<Genre> = [];
  movies: Array<Movie> = [];

  constructor(
    private movieServices: MoviesService,
  ) {
  }

  ngOnInit(): void {
    this.getGenre()
    this.searchGenre()
  }

  getGenre() {
    fetch(this.movieServices.getGenresUrl()).then(res => res.json()).then(data => {
      this.genres = data.genres;
      console.log("genres =" + data.genres)
    })
  }

  searchGenre() {
    fetch(this.movieServices.getSearchGenresUrl()).then(res => res.json()).then(data => {
      this.movies = data.results;
      console.log("searchGenre =" + data.results)
    })
  }
}
