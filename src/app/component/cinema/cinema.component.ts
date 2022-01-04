import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../service/movies.service";
import {Movie} from "../../model/Movie";


@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {

  movies: Array<Movie>=[];

  constructor(
    private movieServices: MoviesService
  ) { }

  ngOnInit(): void {
    this.getMovies()
  }

  getMovies() {
    fetch(this.movieServices.getCinemaUrl()).then(res => res.json()).then(data =>{
      this.movies = data.results;
      //console.log(this.movies)
    })

  }

}
