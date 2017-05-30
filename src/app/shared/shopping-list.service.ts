import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "./ingredient.model";

@Injectable()
export class ShoppingListService {

  ingredientAdded = new EventEmitter<Ingredient>();

  private ingredients: Ingredient[] = [
    new Ingredient('Garlic', 5),
    new Ingredient('Onion', 5),
    new Ingredient('Tomato', 5)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient : Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(ingredient);
  }
}
