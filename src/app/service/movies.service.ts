import {Injectable} from '@angular/core';
import {Movie, MovieResponse} from "../model/Movie";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movies: Array<Movie> = [];
  choosedSide: string = "";
  // Constants
  baseUrl: string = "https://api.themoviedb.org/3";
  apiKey: string = "api_key=b1ab1203863d0124d4bc7d33d3c3311b";
  imgUrl: string = "https://image.tmdb.org/t/p/w500";
  language: string | undefined;
  region: string | undefined;

  //Categories
  cinemaUrl: string = `${this.baseUrl}/discover/movie?primary_release_date.gte=2021-08-15&primary_release_date.lte=2021-11-22&${this.apiKey}`;
  popularUrl: string = `${this.baseUrl}/discover/movie/?certification_country=CH&certification=R&sort_by=vote_average.desc&${this.apiKey}`;

  genreUrl1: string = `${this.baseUrl}/genre/`; //id
  genreUrl2: string = `/movies?${this.apiKey}`;

  allGenreUrl: string = `${this.baseUrl}/genre/movie/list?${this.apiKey}`;
  searchGenreUrl1: string = `${this.baseUrl}/genre/$`; //+id
  searchGenreUrl2: string = `/movies?${this.apiKey}`;

  searchMovieURL: string = `${this.baseUrl}/search/movie?${this.apiKey}&query=` //+Search

  constructor(private httpClient: HttpClient){}

  getImgUrl(): string {
    return this.imgUrl
  }

  getAllGenresUrl(): string {
    return this.allGenreUrl
  }

  getSearchMovies(search: string){
    return this.getMovies( this.searchMovieURL+search);
  }

  getGenreMovies(id:number){
    return this.getMovies( this.genreUrl1 + id + this.genreUrl2);
  }
  getPopularMovies(){
    return this.getMovies(this.popularUrl);
  }
  getCinemaMovies(){
    return this.getMovies(this.cinemaUrl);
  }

  getMovies(url:string):Observable<MovieResponse>{
    return this.httpClient.get<MovieResponse>(url);
  }


}
