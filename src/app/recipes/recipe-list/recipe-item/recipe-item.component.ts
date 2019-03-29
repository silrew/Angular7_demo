import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/recipes/recipes.model';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from 'src/app/recipes/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Output() recipieSelected=new EventEmitter<void>()
  @Input() recipe: Recipe;
  @Input() id: number;
  constructor( private route: ActivatedRoute, private service: RecipeService) { }

  ngOnInit() {
    
 }
  recipieClicked(){
      // this.recipe = this.router.parmas.subscirbe()

  }
}
