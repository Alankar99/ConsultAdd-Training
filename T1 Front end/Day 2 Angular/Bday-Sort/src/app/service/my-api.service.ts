import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyApiService {

  constructor(private http:HttpClient) { }

  // url:any = 'E:\Consultadd\Internship\Training assignments\T1 Front end\Day 2 Angular\Bday-Sort\src\assets\bday-data.json';
  url:any = "assets/bday-data.json"
  userData:any;

  getUserData()
  {
    return this.http.get(this.url);
  }
}
