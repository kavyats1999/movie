import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  movie:any=[]

  constructor(private activatedRouteInstance:ActivatedRoute, private api:ApiService){}
  ngOnInit(): void {
    let getId=this.activatedRouteInstance.snapshot.paramMap.get('id')
    console.log(getId);
    
    this.viewMovie(getId)
    
  }

  viewMovie(id:any){
this.api.viewMovieApi(id).subscribe((result)=>{
  console.log(result);
  this.movie=result
  
})
  }

}
