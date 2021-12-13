import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Movie} from "../model/Movie";


@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  constructor(private  http: HttpClient) {
  }

  private baseUrl = "http://localhost:3000";


  public getFavouritesMovies (){
    return `${this.baseUrl}/movies`
  }

  public insertFavouriteMovie(movie: Movie){
    console.log(this.baseUrl + '/movie', movie);
    this.http.post(this.baseUrl + '/movie', movie)
  }

  public deleteFavouritesMovies(){

  }


}
