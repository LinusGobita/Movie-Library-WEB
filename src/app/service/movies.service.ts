import { Injectable } from '@angular/core';
import {Movie} from "../model/Movie";


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  /**
   * Im zb. Cinema soll gespeichert werden welche URLs benötigt wern. Dann werden sie hier abgerufen
   * Und an Movies weitergegenen.
   *
   */
  movies: Array<Movie>=[];
  choosedSide: string ="";
  // Constants
  baseUrl: string = "https://api.themoviedb.org/3";
  apiKey: string = "api_key=b1ab1203863d0124d4bc7d33d3c3311b";
  imgUrl: string = "https://image.tmdb.org/t/p/w500";
  language: string;
  region: string;


  //URLs wird noch nicht gebraucht?
  cinemaURL: string    = `${this.baseUrl}/discover/movie?primary_release_date.gte=2021-08-15&primary_release_date.lte=2021-11-22&${this.apiKey}`;
  popularURL: string   = `${this.baseUrl}/discover/movie/?certification_country=CH&certification=R&sort_by=vote_average.desc&${this.apiKey}`;
  allGenresURL: string = `${this.baseUrl}/genre/movie/list?${this.apiKey}`;
  //searchGenreURL) string = `${this.baseUrl}/genre/${id}/movies?${this.apiKey}`;
  //searchMovieURL: string = `${this.baseUrl}/search/movie?${this.apiKey}&query=${search}`

/*
//Ich weiss noch nicht wie ich umsetzen kann, dass die URLs nur als string gepeichert werden
  getMoviesFromURL(homepage: string){
    if(homepage = "cinema")
    {
      //this.choosedSide =
    }
    else if (homepage = "genre")
    {

    }
    else if (homepage = "popular")
    {

    }
    fetch(homepage).then(res => res.json()).then(data =>{
      console.log(homepage)
      this.movies = data.results;
      console.log("funktioniert homepage?"+this.movies)
      return this.movies
    })
  }
 */

  // bin mir nicht sicher, ib es dies braucht
  constructor() {
    this.baseUrl = "https://api.themoviedb.org/3";
    this.apiKey = "api_key=b1ab1203863d0124d4bc7d33d3c3311b";
    this.imgUrl = "https://image.tmdb.org/t/p/w500";
    this.language = "en-Us";
    this.region = "CH";
  }

  getImgUrl():string {
    return this.imgUrl
  }

  //Datum Noch anpassen und CH hinzufügen
  getCinemaUrl():string {
    console.log(`${this.baseUrl}/discover/movie?primary_release_date.gte=2021-08-15&primary_release_date.lte=2021-11-22&${this.apiKey}`)
    return `${this.baseUrl}/discover/movie?primary_release_date.gte=2021-08-15&primary_release_date.lte=2021-11-22&${this.apiKey}`;
  }
  getPopularUrl():string {
    console.log("popular works! link = " +  this.baseUrl + "/discover/movie/?certification_country=CH&certification=R&sort_by=vote_average.desc&" + this.apiKey)
    return `${this.baseUrl}/discover/movie/?certification_country=CH&certification=R&sort_by=vote_average.desc&${this.apiKey}`;
  }
  getAllGenresUrl():string {
    //console.log("genre works! link = " + this.baseUrl + "genre/movie/list?" + this.apiKey)
    return `${this.baseUrl}/genre/movie/list?${this.apiKey}`
  }

  //Noch der Richtige Link eintragen mit Variable Genre.id
  getSearchGenresUrl(id: number):string{
    return `${this.baseUrl}/genre/${id}/movies?${this.apiKey}`
  }

  getSearchUrl(search: string):string{
    //console.log(`search works! = ${this.baseUrl}/search/movie?${this.apiKey}&query=${search}`)
    return `${this.baseUrl}/search/movie?${this.apiKey}&query=${search}`
  }
}
