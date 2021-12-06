import { Component, OnInit } from '@angular/core';
import {Movie} from "../../model/Movie";


@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  favouriteMovies: Array<Movie>=[];

  constructor() { }

  ngOnInit(): void {
    this.getMovies()
  }

  getMovies() {
    fetch("favourite/DBFavourite.json").then(res => res.json()).then(data =>{
      this.favouriteMovies = data.results;
      console.log("data.results = " + data.results)
      console.log("favouriteMovies = " + this.favouriteMovies)
    })

  }

}
