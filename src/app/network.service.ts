import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  URL = 'https://jsonplaceholder.typicode.com/users'
  constructor(private http:HttpClient) {
    
   }
   getURL(){
    return this.http.get(this.URL);
   }
}
