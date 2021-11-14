import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CinemaComponent} from "./component/cinema/cinema.component";
import {PopularComponent} from "./component/popular/popular.component";
import {GenreComponent} from "./component/genre/genre.component";

const routes: Routes = [
  {
    path: '',
    component: CinemaComponent
  },
  {
    path: 'home',
    component: CinemaComponent
  },
{
    path: 'popular',
    component: PopularComponent
  },
{
    path: 'genres',
    component: GenreComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)

  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
