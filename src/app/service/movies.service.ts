import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  /**
   * Im zb. Cinema soll gespeichert werden welche URLs benötigt wern. Dann werden sie hier abgerufen
   * Und an Movies weitergegenen.
   *
   */
  baseUrl: string = "https://api.themoviedb.org/3";
  apiKey: string = "api_key=b1ab1203863d0124d4bc7d33d3c3311b";
  imgUrl: string = "https://image.tmdb.org/t/p/w500";
  language: string;
  region: string;

  /*
  baseUrl: string;
  apiKey: string;
  imgUrl: string;
  language: string;
  region: string;
  */

  // bin mir nicht sicher, ib es dies braucht
  constructor() {
    this.baseUrl = "https://api.themoviedb.org/3";
    this.apiKey = "api_key=b1ab1203863d0124d4bc7d33d3c3311b";
    this.imgUrl = "https://image.tmdb.org/t/p/w500";
    this.language = "en-Us";
    this.region = "CH";
  }


  // Im Service heissen alle Funktionen get!
  // https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b1ab1203863d0124d4bc7d33d3c3311b
  // API Beispiele: https://www.themoviedb.org/documentation/api/discover

  getImgUrl():string {
    return this.imgUrl
  }

  //Datum Noch anpassen und CH hinzufügen
  getCinema():string {
    //console.log("cinema works!")
    return this.baseUrl + "/discover/movie?primary_release_date.gte=2021-08-15&primary_release_date.lte=2021-11-22&" + this.apiKey;
  }
  getPopular():string {
    //console.log("popular works! link = " +  this.baseUrl + "/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&" + this.apiKey)
    return this.baseUrl + "/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&" + this.apiKey;
  }
  getGenres():string {
    //console.log("genre works! link = " + this.baseUrl + "genre/movie/list?" + this.apiKey)
    //return this.baseUrl + "/genre/movie/list?" + this.apiKey;
    return "https://api.themoviedb.org/3/genre/movie/list?api_key=b1ab1203863d0124d4bc7d33d3c3311b"
  }

  //Noch der Richtige Link eintragen mit Variable Genre.id
  getSearchGenres():string{
    return "https://api.themoviedb.org/3/genre/movie/list?api_key=b1ab1203863d0124d4bc7d33d3c3311b"
  }


  /*
  getNowPlaying(page: number): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.get(`${this.baseUrl}movie/now_playing?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`);
  }
  searchMovies(searchStr: string): Observable<any> {
    return this.http.get(`${this.baseUrl}search/movie?api_key=${this.apiKey}&query=${searchStr}`);
  }

  getTopRatedMovies(page: number): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.get(`${this.baseUrl}movie/top_rated?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`);
  }
*/

}
