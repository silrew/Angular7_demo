import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import { RecipeService } from 'src/app/recipes/recipe.service';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from 'src/app/auth/signup/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: Http,
              private recipeService: RecipeService,
              private authService: AuthService) { }

  storeRecipes() : Observable<any>{
    const token = this.authService.getToken();
    return this.http.put('https://ng-recipe-demo-39c6a.firebaseio.com/recipes.json/?auth='+ token,this.recipeService.getRecipes());
  }

  getData(){
    const token = this.authService.getToken();
    this.http.get('https://ng-recipe-demo-39c6a.firebaseio.com/recipes.json/?auth='+ token)
    .subscribe((response: Response)=>{
      const recipes= response.json();
      this.recipeService.setRecipes(recipes);
    })
  }

}
