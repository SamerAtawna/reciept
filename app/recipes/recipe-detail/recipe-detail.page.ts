import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private recipesService: RecipesService) { }
loadedRecipe: Recipe;
  ngOnInit() {
  this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('OrderId')) {
        return;
      }
      const recipeId = paramMap.get('OrderId');
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    });
  }

}
