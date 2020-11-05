import { Component, OnInit } from '@angular/core';
import {NewsService} from'../news.service';


@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {
  news:object={};
  constructor(private _NewsService:NewsService) { 
    this._NewsService.getNews('science').subscribe((data)=>
    {
   
      this.news = data.articles;
    })
  }

  ngOnInit(): void {
  }

}
