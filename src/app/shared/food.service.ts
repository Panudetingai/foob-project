import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Food } from '../modal/food';
import { Observable } from 'rxjs';
import { User } from '../modal/user';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private foodapi = "https://localhost:7280/api/Food";

  constructor(private http: HttpClient) { }

  getFoodapi() : Observable<Food[]>{
    return this.http.get<Food[]>(this.foodapi);
  }
  getFoodsale() : Observable<Food[]>{
    return this.http.get<Food[]>(this.foodapi + '/sale');
  }
}
