import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  editmode = false;
  editIndex: number;
  editItem: Ingredient;
  editSubscription: Subscription;
  @ViewChild('f') slForm: NgForm;
  constructor(private shoppingListService: ShoppingListService) { }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editmode) {
      this.shoppingListService.updateIngredient(this.editIndex, newIngredient);
      this.slForm.reset();
    } else {
      this.shoppingListService.addItem(newIngredient);
    }
      this.editmode = false;
    
  }

  onDelete(){
    this.onClear();
    this.shoppingListService.deleteIngredient(this.editIndex);
  }
  onClear(){
    this.slForm.reset();
    this.editmode = false;
  }

  ngOnInit() {
    this.editSubscription =
      this.shoppingListService.startEditing.subscribe((id: number) => {
        this.editmode = true;
        this.editIndex = id;
        this.editItem = this.shoppingListService.getIngredient(this.editIndex);
        this.slForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        })
      })

  }

  ngOnDestroy() {
    this.editSubscription.unsubscribe()
  }

}
