import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http:HttpClient) { }

  getBikes(){
    return this.http.get('/server/api/v1/bikes');
  }

  getBike(id: number){
    return this.http.get('/server/api/v1/bikes/' +id);
  }

  createBikeRegistration(bike){
    let body= JSON.stringify(bike);
   // return this.http.post('/server/api/v1/bikes', body, httpOptions);
   return this.http.post('/server/api/v1/bikes', body, httpOptions);
  }

  UpdateBikeRegistration(id:number, bike){
    let body=JSON.stringify(bike);
   // return this.http.post('/server/api/v1/bikes', body, httpOptions);
   //console.log(body)
   return this.http.put('/server/api/v1/bikes/' +id, body,  httpOptions);

  }


  deleteBike(id: number){
    return this.http.delete('/server/api/v1/bikes/' +id);
  }

}
