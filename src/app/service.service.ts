import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url=("http://localhost:4200/assets/student.json")
  constructor(private http:HttpClient) { }
  getDetials(){
    return this.http.get(this.url);
    
  }
}
