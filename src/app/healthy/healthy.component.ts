import { Component, OnInit } from '@angular/core';
import {NewsService} from'../news.service';

@Component({
  selector: 'app-healthy',
  templateUrl: './healthy.component.html',
  styleUrls: ['./healthy.component.css']
})
export class HealthyComponent implements OnInit {

  news:object={};

  constructor(private _NewsService:NewsService) {
    this._NewsService.getNews('health').subscribe((data)=>
    {
   
      this.news=data.articles;
    })
   }

  ngOnInit(): void {
  }

}
