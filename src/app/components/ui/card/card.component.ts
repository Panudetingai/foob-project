import { Component, HostListener, OnInit } from '@angular/core';
import { FoodService } from '../../../shared/food.service';
import { Food } from '../../../modal/food';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {

  slidesPerView:number = 4;
  screenWidth!: number;
  @HostListener('window:resize')
  getScreenWidth(){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth >= 1110 && this.screenWidth <= 1140){
      this.slidesPerView = 4;
    }
    else if(this.screenWidth >= 830 && this.screenWidth <= 1110){
      this.slidesPerView = 3;
    }
    else if(this.screenWidth >= 560 && this.screenWidth <= 830){
      this.slidesPerView = 2;
    }
    else if(this.screenWidth >= 350 && this.screenWidth <= 560){
      this.slidesPerView = 1;
    }
  }

  onProduct: any;
  foodobj: Food = new Food();
  foodArray: Food[] = [];

  constructor(private food: FoodService) {}

  ngOnInit(): void {
    this.foodobj = new Food();
    this.foodArray = [];
    this.getallfood();
  }
  
  getallfood(){
    this.food.getFoodapi().subscribe(res =>{
      this.foodArray = res;
      console.log(this.foodArray);
    }, error =>{
      console.log('something went wrong api foob', error);
    })
  }
}
