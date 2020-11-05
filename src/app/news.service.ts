import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import {Observable} from'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsService 
{

  constructor(private _HttpClient:HttpClient) { }

  getNews(newsType):Observable<any>
  {
    return this._HttpClient.get(`http://newsapi.org/v2/top-headlines?country=eg&category=${newsType}&apiKey=7914ec1a03844b459dab9e56d8e6b6bc`)
  }
   

}
