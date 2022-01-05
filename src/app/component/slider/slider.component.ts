import {Component, Input, OnInit} from '@angular/core';
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";
import {Movie} from "../../model/Movie";
import {MoviesService} from "../../service/movies.service";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  imgUrl: string = "";

  @Input() movies: Array<Movie> = [];

  constructor(
    private movieServices: MoviesService,
    config: NgbCarouselConfig) {
    config.interval = 7000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;

  }
  ngOnInit(): void {
    this.getImageUrl();
    console.log("Slider movies"+this.movies+this.imgUrl);

  }
  getImageUrl() {
    this.imgUrl = this.movieServices.getImgUrl();
  }

}
