import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL="http://api.themoviedb.org/3/"
   apikey="47de2b9e8b2462b53975d18185ac40bf"
  

  constructor(private http:HttpClient) { }

  getallMovies=()=>{
    return this.http.get(`${this.API_URL}//trending/all/week?api_key=${this.apikey}`)
 }

 viewMovieApi=(data:any)=>{
  return this.http.get(`${this.API_URL}/movie/${data}?api_key=${this.apikey}`)
 }

getSearchMovie=(data:any)=>{

  return this.http.get(`${this.API_URL}/search/movie?api_key=${this.apikey}&query=${data.movieName}`)

}
 
}
