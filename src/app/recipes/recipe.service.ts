import { Injectable, Output} from '@angular/core';
import { Recipe } from 'src/app/recipes/recipes.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';


// @Injectable({
//   providedIn: 'root'
// })
export class RecipeService {
   recipesChanged = new Subject<Recipe[]>();
    Recipes :Recipe[]= [new Recipe('Tasty Schnitzel', 
                                  'Super tasty schnitzel -just awesome',
                                  'https://www.maxpixel.net/static/photo/1x/Food-Kitchen-Meals-Home-Made-Dishes-Recipe-Bio-1175493.jpg',
  [new Ingredient('All purpose flour', 1),
   new Ingredient('tomato', 4),
   new Ingredient('onion', 2),
   new Ingredient('garlic', 4) ]),
                      new Recipe('Big Fat Burger',
                                  'Juicy fat burger',
                                  'https://www.maxpixel.net/static/photo/1x/Burgers-Burger-Chickpeas-Recipes-Food-Vegetables-2920072.jpg',
                                  [new Ingredient('Bread', 1),
                                  new Ingredient('tomato', 4),
                                  new Ingredient('onion', 2),
                                  new Ingredient('garlic', 4)]
                    ) ,
                    new Recipe('Cheese Cake',
                                'scrumptious cheese cake',
                                'https://cdn.pixabay.com/photo/2017/09/14/14/33/cupcake-2749204_960_720.jpg',
                    [new Ingredient('All purpose flour', 1),
                    new Ingredient('cream cheese', 4),
                    new Ingredient('sugar', 2),
                    new Ingredient('vanilla extract', 4)]
      )
];
  constructor() { }

  getRecipes(){
    return this.Recipes.slice();
  }
  setRecipes(recipes: Recipe[]){
    this.Recipes = recipes;
    this.recipesChanged.next(this.Recipes.slice());
  }
  getRecipe(id: number){
    return this.Recipes[id]
  }
  addRecipe(recipe: Recipe){
    this.Recipes.push(recipe);
    this.recipesChanged.next(this.Recipes.slice());
  }
  updateRecipe(index: number, newRecipe:Recipe){
    this.Recipes[index]=newRecipe;
    this.recipesChanged.next(this.Recipes.slice());
  }
  deleteRecipe(id: number){
    this.Recipes.splice(id,1);
    this.recipesChanged.next(this.Recipes.slice());
  }
}
