import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FoodService } from '../../../shared/food.service';
import { Food } from '../../../modal/food';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit{
  title = 'Food shop';

  foodobj = new Food();
  foodarray: Food[] = [];

  constructor(private titleService: Title, private food: FoodService, private http: HttpClient){}

  ngOnInit(): void {
    this.titleService.setTitle('Food shop');

    this.getallfood();
  }

  getallfood(){
    this.food.getFoodapi().subscribe(res =>{
      this.foodarray = res;
      console.log("res 200ok");

    }, error =>{
      console.log('something went wrong', error);
    })
  }
}
