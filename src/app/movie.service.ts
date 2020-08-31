import { MessagesService } from './messages.service';
import { MOVIES } from './mock-movies';
import { Injectable } from '@angular/core';
import {Movie} from './movie';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private messagesService: MessagesService) { }

  getMovies(): Observable<Movie[]> {
    this.messagesService.add('MovieService: fetched Movie');
    return of(MOVIES);
  }

  
}
