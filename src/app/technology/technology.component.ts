import { Component, OnInit } from '@angular/core';
import {NewsService} from'../news.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  news:object={};

  constructor(private _NewsService:NewsService) {
    this._NewsService.getNews('technology').subscribe((data)=>
    {
   
      this.news = data.articles;
    })
   }

  ngOnInit(): void {
  }

}
