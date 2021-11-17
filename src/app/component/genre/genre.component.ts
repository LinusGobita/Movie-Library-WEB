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
  // Sollte auch dynamisch sein: also 1ste position aus json
  genreId: number = 28;
  genreString: string= "Action";

  constructor(
    private movieServices: MoviesService,
  ) {
  }

  ngOnInit(): void {
    this.getGenre()
    this.searchGenre()
  }


  selectGenre(id: number, name: string){
    this.genreId = id;
    this.genreString = name
    this.searchGenre();
  }
  getGenre() {
    fetch(this.movieServices.getGenresUrl()).then(res => res.json()).then(data => {
      this.genres = data.genres;
      console.log("genres =" + data.genres)
    })
  }

  searchGenre() {
    fetch(this.movieServices.getSearchGenresUrl(this.genreId)).then(res => res.json()).then(data => {
      this.movies = data.results;
      console.log("searchGenre =" + data.results)
    })
  }
}
