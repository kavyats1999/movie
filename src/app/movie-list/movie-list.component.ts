import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit{

  allMovies:any=[]

  searchKey:string=""


  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.getMovies()
  }

  getMovies=()=>{
    this.api.getallMovies().subscribe({
      next:(res:any)=>{
        this.allMovies=res.results
        console.log(this.allMovies)
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }
  searchResult:any;
  searchForm= new FormGroup({
    'movieName':new FormControl(null)
  });

  submitForm(){
    console.log(this.searchForm.value);
    this.api.getSearchMovie(this.searchForm.value).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.searchResult=res.results
      }
    })
    
  }


}
