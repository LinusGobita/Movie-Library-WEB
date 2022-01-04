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
  genreId: number = 28;
  genreName: string= "Action";

  constructor(
    private movieServices: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(params => this.getMovies(params["genreId"]))
  }

  ngOnInit(): void {
    this.getAllGenre()
    this.getMovies(28)
  }

  selectGenre(id: number, name: string){
    this.genreId = id;
    this.genreName = name
    this.router.navigate(["genres", this.genreId])
    this.getMovies(this.genreId)
    //this.doSearchSelectGenreMovies(this.genreId);
  }
  getAllGenre() {
    fetch(this.movieServices.getAllGenresUrl()).then(res => res.json()).then(data => {
      this.genres = data.genres;
      console.log("get Genre Movies");
    })
  }
  getMovies(genreId: number) {
    //null eventuell noch ausblenden
    console.log("get genre " + this.genreName)
    this.movieServices.getGenreMovies(genreId).subscribe((response) => this.movies = response.results);
    //console.log("cinema movies"+this.movies);
  }

}
