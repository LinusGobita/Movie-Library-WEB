import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CinemaComponent} from "./component/cinema/cinema.component";
import {PopularComponent} from "./component/popular/popular.component";
import {GenreComponent} from "./component/genre/genre.component";
import {SearchComponent} from "./component/search/search.component";
import {NotFoundComponent} from "./component/not-found/not-found/not-found.component";
import {FavouriteComponent} from "./component/favourite/favourite.component";

const routes: Routes = [
  {
    //Wieso funktioniert redirecTo nicht?
    path: '', /*redirectTo: 'home', pathMatch: 'full',*/
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
  },
  {
    path: 'favourite',
    component: FavouriteComponent
  },
{
    path: 'search',
    component: SearchComponent
  },
{
    path: '**',
  component: NotFoundComponent
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
