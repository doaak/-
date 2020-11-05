import { Component, OnInit } from '@angular/core';
import {NewsService} from'../news.service';


@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  
  news:object={};
  constructor(private _NewsService:NewsService) {
    this._NewsService.getNews('sports').subscribe((data)=>
    {
   
      this.news = data.articles;
    })
   }

  ngOnInit(): void {
  }

}
