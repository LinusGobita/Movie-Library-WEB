import {Component, Input, OnInit} from '@angular/core';
import {MoviesService} from "../../service/movies.service";
import {Movie} from "../../model/Movie";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {


  //undefined entfernen
  imgUrl: string="";
  @Input() movies: Array<Movie> | undefined;


  constructor(
    private movieServices: MoviesService
  ) { }

  ngOnInit(): void {
    this.getImageUrl()
  }

  getImageUrl(){
    this.imgUrl = this.movieServices.getImgUrl();
    console.log(this.imgUrl)
  }

}
