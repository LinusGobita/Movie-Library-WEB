import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Movie} from "../model/Movie";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  constructor(private  http: HttpClient) {
  }

  private baseUrl = "http://localhost:3000";


  public getFavouritesMovies (){
    return this.http.get<Array<Movie>>(this.baseUrl+'/favourite')
  }

  public insertFavouriteMovie(movie: Movie): Observable<any>{
    //console.log(this.baseUrl + '/movie' + movie);
    return this.http.post(this.baseUrl + '/movie', movie)
  }

  public deleteFavouritesMovies(){

  }


}
