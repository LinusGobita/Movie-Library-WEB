import {Component, OnInit} from '@angular/core';
import {SearchComponent} from "../../search/search.component";
import {Router} from "@angular/router";

@Component({
  providers:[SearchComponent],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  leftSidebar: any;
  searchValue: string ="" ;

  constructor(
    private search: SearchComponent,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  setSearchValue() {
    this.router.navigate(['search']),
    console.log(this.searchValue)
    this.search.getMovies(this.searchValue);
  }
}
