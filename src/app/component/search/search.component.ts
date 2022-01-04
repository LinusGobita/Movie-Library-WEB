import {Component, OnInit} from '@angular/core';
import {Movie} from "../../model/Movie";
import {MoviesService} from "../../service/movies.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movies: Array<Movie> = [];
  searchValue: string ="";

  constructor(
    private movieServices: MoviesService,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe(params => this.getMovies(params["searchValue"]))
  }

  ngOnInit(): void {
  }

  getMovies(searchValue: string) {
    this.movieServices.getSearchMovies(searchValue).subscribe((response) => this.movies = response.results);
    //console.log("cinema movies"+this.movies);
  }
}
