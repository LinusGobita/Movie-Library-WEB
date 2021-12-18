import {Component, Input, OnInit} from '@angular/core';
import {MoviesService} from "../../service/movies.service";
import {Movie} from "../../model/Movie";
import {FavouriteService} from "../../service/favourite.service";


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {


  //undefined entfernen
  imgUrl: string = "";
  @Input() movies: Array<Movie> = [];


  constructor(
    private movieServices: MoviesService,
    private favouriteService: FavouriteService
  ) {
  }

  ngOnInit(): void {
    this.getImageUrl()
  }

  getImageUrl() {
    this.imgUrl = this.movieServices.getImgUrl();
    //console.log(this.imgUrl)
  }

  addFavorite(movie: Movie) {
    if (movie._id == null){
      this.favouriteService.insertFavouriteMovie(movie);
    } else {
      this.favouriteService.deleteFavouriteMovie(movie._id);
      setTimeout(function(){window.location.reload()}, 10);
    }
  }

}
