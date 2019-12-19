import { Component, OnInit } from '@angular/core';
import { Dish } from "../shared/dish";
import { DISHES } from '../shared/dishes';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})


export class DishdetailComponent implements OnInit {

 // dish: Dish;
 dishes: Dish[] = DISHES;

 dish: Dish = DISHES[0];

  constructor() { }

  ngOnInit() {
  }

}
