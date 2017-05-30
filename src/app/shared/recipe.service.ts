import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "../recipes/recipe.model";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 'The recipe', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--488691_11.jpg?itok=ExaTspz1'),
    new Recipe('Test Recipe 2', 'The recipe', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--488691_11.jpg?itok=ExaTspz1')
  ];

  constructor() {
  }

  getRecipes() {
    //slice will return a copy of the recipes
    return this.recipes.slice();
  }
}
