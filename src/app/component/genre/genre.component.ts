import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../service/movies.service";
import {Genre} from "../../model/Genre";
import {Movie} from "../../model/Movie";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  // Bei url änderung noch updaiten!!!

  genres: Array<Genre> = [];
  movies: Array<Movie> = [];
  // Sollte auch dynamisch sein: also 1ste position aus json

  genreName: string= "Your Genres";

  constructor(
    private movieServices: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(params => this.getMovies(params["genreId"]))
  }

  ngOnInit(): void {
    this.getAllGenre()
  }

  selectGenre(id: number, name: string){
    this.genreName = name
    this.router.navigate(["genres", id])
  }

  getAllGenre() {
    fetch(this.movieServices.getAllGenresUrl()).then(res => res.json()).then(data => {
      this.genres = data.genres;
      console.log("get Genre Movies");
    })
  }
  getMovies(genreId: number) {
    //If the page is reloag show movies from id 28
    if(genreId == undefined){
      genreId = 28
    }
    this.movieServices.getGenreMovies(genreId).subscribe((response) => this.movies = response.results);
  }

}
