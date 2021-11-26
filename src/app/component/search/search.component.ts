import {Component, OnInit} from '@angular/core';
import {Movie} from "../../model/Movie";
import {MoviesService} from "../../service/movies.service";
import {ActivatedRoute, Router} from "@angular/router";


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
    this.route.params.subscribe(params => this.doSearch(params["searchValue"]))
  }

  ngOnInit(): void {
  }


  doSearch(searchValue: string) {
    fetch(this.movieServices.getSearchUrl(searchValue)).then(res => res.json()).then(data => {
      this.movies = data.results;
    })
  }


}
