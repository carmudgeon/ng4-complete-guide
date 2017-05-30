import {Component, Input, OnInit} from '@angular/core';
import {EventListener} from "@angular/core/src/debug/debug_node";
import {Recipe} from "./recipe.model";
import {RecipeService} from "../shared/recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe:Recipe)=>{
      this.selectedRecipe = recipe;
    })
  }


}
