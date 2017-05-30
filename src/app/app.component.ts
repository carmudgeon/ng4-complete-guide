import {Component} from '@angular/core';
import {RecipeService} from "./shared/recipe.service";
import {ShoppingListService} from "./shared/shopping-list.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService, ShoppingListService]
})
export class AppComponent {
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    console.log(feature);
    this.loadedFeature = feature;
  }
}
