import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipesArray: Recipe[];
 private recipes: Recipe[] = [
    {
      OrderId: '1',
      CustomerId: '98765',
       Name: 'Avi',
       Address: 'Ashqelon, 665544',
       Product: 'Pizza',
       Description: 'Special pizza'
    },
    {
       OrderId: '2',
       CustomerId: '12345',
       Name: 'Yossi',
       Address: 'Beer Sheva, 223345',
       Product: 'Shawarma',
       Description: 'Shawarma with chips and drink'
    },
    {
      OrderId: '3',
      CustomerId: '6543',
       Name: 'Omri',
       Address: 'Ashqelon, 665544',
        Product: 'Falafel',
       Description: 'Falafel and drink'
    }
  ]
  constructor() {}
  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {

  return {...this.recipes.find(recipe => {
      return recipe.OrderId.indexOf(recipeId) > -1 || recipe.Description.toLowerCase().indexOf(recipeId.toLowerCase()) > -1;
    })
  };
  }
}
