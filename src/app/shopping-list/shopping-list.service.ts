import { Injectable , EventEmitter} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject'

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  ingredients: Ingredient[]=[ new Ingredient( 'tomatoes',4),
                              new Ingredient('onion',1)];
  startEditing= new Subject<number>();                              

  constructor() { }

  getShoppingList(){
    return this.ingredients.slice();
  }

  getIngredient(id: number){
    return this.ingredients[id];
  }

  addItem( ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addItems(ingrednts: Ingredient[]){
    this.ingredients.push(...ingrednts);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(id: number, newIgredient: Ingredient){
    this.ingredients[id]= newIgredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
