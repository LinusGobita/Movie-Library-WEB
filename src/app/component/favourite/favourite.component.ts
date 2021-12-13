import { Component, OnInit } from '@angular/core';
import {Movie} from "../../model/Movie";
import {FavouriteService} from "../../service/favourite.service";


@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  movies: Array<Movie>=[];

  constructor(
    private favouriteService: FavouriteService
  ) { }

  ngOnInit(): void {
    this.getMovies()
  }

  getMovies() {
    fetch(this.favouriteService.getFavouritesMovies()).then(res => res.json()).then(data =>{
      this.movies = data;
    })

  }

}
