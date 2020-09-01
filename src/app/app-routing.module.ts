import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MoviesComponent } from './movies/movies.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [{path: '', redirectTo: '/dashboard', pathMatch: 'full'},
{ path: 'home', component: HomeComponent},
{ path: 'dashboard', component: DashboardComponent },
{ path: 'detail/:id', component: MovieDetailComponent },
{ path: 'movies', component: MoviesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
