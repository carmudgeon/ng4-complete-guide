import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {AuthGuard} from "./auth-guard.service";

const appRoutes: Routes = [
  { path: 'recipes', canActivate: [AuthGuard], component: RecipesComponent},
  { path: 'shopping-list', component: ShoppingListComponent},
  { path: '', redirectTo: 'recipes', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: false})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
