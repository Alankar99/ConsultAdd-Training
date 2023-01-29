import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyApiService {

  url = ' https://jsonplaceholder.typicode.com/posts';

  constructor(private myapi : HttpClient){}
  
  getPostdata()
  {
    return this.myapi.get(this.url);
  }
}
