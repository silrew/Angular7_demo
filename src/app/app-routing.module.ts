import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RecipesComponent } from 'src/app/recipes/recipes.component';
import { ShoppingListComponent } from 'src/app/shopping-list/shopping-list.component';
import { RouterModule } from '@angular/router';
import { RecipeStartComponent } from 'src/app/recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from 'src/app/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from 'src/app/recipes/recipe-edit/recipe-edit.component';
import { SignupComponent } from 'src/app/auth/signup/signup.component';
import { SigninComponent } from 'src/app/auth/signin/signin.component';

const appRoutes: Routes = [
        {path: '', redirectTo:'/recipes', pathMatch: 'full'},
        {path: 'shopping-list', component: ShoppingListComponent},
        {path: 'signup', component: SignupComponent},
        {path: 'signin', component: SigninComponent},
        {path: 'recipes', component: RecipesComponent, children:[
            {path:'', component: RecipeStartComponent},
            {path:'new', component: RecipeEditComponent},
            {path:':id', component: RecipeDetailComponent},
            {path:':id/edit', component: RecipeEditComponent}
        ]}
        ]
 @NgModule({
        imports:[ RouterModule.forRoot(appRoutes)],
        exports:[ RouterModule]
})
export class AppRoutingModule{
   
}