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
// https://api.themoviedb.org/3/find/%7Bexternal_id%7D?api_key=%3C%3Capi_key%3E%3E&language=en-US&external_source=imdb_id
// https://api.themoviedb.org/3/find/{512195}?api_key=b1ab1203863d0124d4bc7d33d3c3311b
// https://api.themoviedb.org/3/find/{external_id}?api_key=<<api_key>>&language=en-US&external_source=imdb_id
// https://api.themoviedb.org/3/find/{522402}?api_key=b1ab1203863d0124d4bc7d33d3c3311b&language=en-US&external_source=imdb_id

  // Im Service heissen alle Funktionen get!
  // https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b1ab1203863d0124d4bc7d33d3c3311b
  // API Beispiele: https://www.themoviedb.org/documentation/api/discover

  getImgUrl():string {
    return this.imgUrl
  }

  //Datum Noch anpassen und CH hinzufügen
  getCinemaUrl():string {
    //console.log("cinema works!")
    return `${this.baseUrl}/discover/movie?primary_release_date.gte=2021-08-15&primary_release_date.lte=2021-11-22&${this.apiKey}`;
  }
  getPopularUrl():string {
    console.log("popular works! link = " +  this.baseUrl + "/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&" + this.apiKey)
    return `${this.baseUrl}/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&${this.apiKey}`;
  }
  getAllGenresUrl():string {
    console.log("genre works! link = " + this.baseUrl + "genre/movie/list?" + this.apiKey)
    return `${this.baseUrl}/genre/movie/list?${this.apiKey}`
  }

  //Noch der Richtige Link eintragen mit Variable Genre.id
  getSearchGenresUrl(id: number):string{
    return `${this.baseUrl}/genre/${id}/movies?${this.apiKey}`
  }

  getSearchUrl(search: string):string{
    console.log(`search works! = ${this.baseUrl}/search/movie?${this.apiKey}&query=${search}`)
    return `${this.baseUrl}/search/movie?${this.apiKey}&query=${search}`
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
