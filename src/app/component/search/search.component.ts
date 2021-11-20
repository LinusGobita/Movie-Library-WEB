import {Component, OnInit} from '@angular/core';
import {Movie} from "../../model/Movie";
import {MoviesService} from "../../service/movies.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movies: Array<Movie> = [];
  //Nur zu Test
  searchValue: any;

  constructor(
    private movieServices: MoviesService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  getMovies(searchValue: string) {
    this.router.navigate(['search'])
    fetch(this.movieServices.getSearchUrl(searchValue)).then(res => res.json()).then(data => {
      this.movies = data.results;
      console.log("movie search =" + this.movies)
    })
  }

  setSearchValue() {
    this.router.navigate(['search'])
    fetch(this.movieServices.getSearchUrl(this.searchValue)).then(res => res.json()).then(data => {
      this.movies = data.results;
    })
  }


}
