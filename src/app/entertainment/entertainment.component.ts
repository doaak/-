import { Component, OnInit } from '@angular/core';
import {NewsService} from'../news.service';


@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  news:object={};

  constructor(private _NewsService:NewsService) 
  { 
    this._NewsService.getNews('entertainment').subscribe((data)=>
    {
   
      this.news=data.articles;
    })
   
  }

  ngOnInit(): void {
  }

}
