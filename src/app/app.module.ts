import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './component/root/app.component';
import { FooterComponent } from './component/includes/footer/footer.component';
import { HeaderComponent } from './component/includes/header/header.component';
import { CinemaComponent } from './component/cinema/cinema.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MoviesComponent } from './component/movies/movies.component';
import { PopularComponent } from './component/popular/popular.component';
import {HttpClientModule} from "@angular/common/http";
import { GenreComponent } from './component/genre/genre.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CinemaComponent,
    MoviesComponent,
    PopularComponent,
    GenreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
