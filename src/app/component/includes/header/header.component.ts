import {Component, OnInit} from '@angular/core';
import {SearchComponent} from "../../search/search.component";
import {ActivatedRoute, Router} from "@angular/router";

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
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  onSearch() {
    this.router.navigate(["search", this.searchValue])
    console.log("prepair Url for search Movies");
  }
}
