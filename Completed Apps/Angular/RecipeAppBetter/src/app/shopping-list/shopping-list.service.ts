// THIS FILE IS NO LONGER BEING USED BECAUSE OF NGRX

import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Carrots', 10),
      ];
    
    // REPLACED BY NGRX THROUGH STORE
    // getIngredients() {
    //     console.log(this.ingredients.slice());
    //     return this.ingredients.slice();
    // }

    getIngredient(index:number) {
        return this.ingredients[index];
    }

    // REPLACED BY NGRX THROUGH STORE
    // addIngredient(ingredient: Ingredient) {
    //     this.ingredients.push(ingredient);
    //     this.ingredientsChanged.next(this.ingredients.slice());
    // }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index:number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}