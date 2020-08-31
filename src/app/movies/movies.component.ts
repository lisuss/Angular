import { MovieService } from './../movie.service';
import { Movie } from './../movie';
import { Component, OnInit } from '@angular/core';
import {MOVIES} from './../mock-movies';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  selectedMovie: Movie;
  movies: Movie[];
  

  constructor(private MovieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }
  
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  getMovies(): void {
    this.MovieService.getMovies().
    subscribe(movies => this.movies=movies);
  }
}
