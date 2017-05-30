import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from "../../shared/shopping-list.service";
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredients() {
    this.recipe.ingredients.forEach((i:Ingredient)=>{
      this.slService.addIngredient(i);
    });
  }
}
