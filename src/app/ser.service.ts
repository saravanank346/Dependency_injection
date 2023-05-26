import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SerService {
  url=("https://jsonplaceholder.typicode.com/users")
  constructor(private http:HttpClient) {  }
  getinfo(){
    return this.http.get(this.url);
  }


}
