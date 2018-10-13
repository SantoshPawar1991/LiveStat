import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http : HttpClient) {}

  empData(){
     return this._http.get("https://jsonplaceholder.typicode.com/comments");
                 
  }

}
