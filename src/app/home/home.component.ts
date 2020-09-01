import { Component, OnInit } from '@angular/core';
import { MovieService } from './../movie.service';
import { Movie } from './../movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedMovie: Movie;
  movies: Movie[];
  movieName: string;

  constructor(private MovieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.MovieService.getMovies().
    subscribe(movies => this.movies=movies);
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

}
