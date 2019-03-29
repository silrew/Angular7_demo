import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipes.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params , Router} from '@angular/router';
import { RecipeService } from 'src/app/recipes/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
 recipe: Recipe;
 id: number;
  constructor(private shlService: ShoppingListService,
              private route: ActivatedRoute, 
              private service: RecipeService,
              private router: Router
             ) { }

  addToShoppinList(){
    this.shlService.addItems(this.recipe.ingredients);
  }

  onDeleteREcipe(){
    this.service.deleteRecipe(this.id);
   this.router.navigate(['/recipes']) ;
  }

  ngOnInit() {
     this.route.params.subscribe((params: Params)=>{
      this.id= +params['id'];
      this.recipe=  this.service.getRecipe(this.id);
    })
  }

  ngOnDestroy(){

  }

}
