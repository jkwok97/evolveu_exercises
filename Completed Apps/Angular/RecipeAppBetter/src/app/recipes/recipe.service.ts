// NOT BEING USED NOW BECAUSE OF NGRX

import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    
    private recipes: Recipe[] = [
        new Recipe(
            'Casserole', 
            'A super tasty casserole', 
            'https://images.ecosia.org/du_VUNwuhkMcqGK7HQCp4WNMaKA=/0x390/smart/https%3A%2F%2Fs3.amazonaws.com%2Fsparkpeople%2Fguid%2FChili-Beef-Polenta-Bake%2F53f48dda-9c98-4c85-a226-7f19b34b98ad.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Cheese', 5),
                new Ingredient('Broccoli', 10),
                new Ingredient('Spinach', 8),
            ]),
        new Recipe(
            'Broccoli and Cheese Soup', 
            'A super tasty soup', 
            'https://images.ecosia.org/BUHfI_sOcwBfl5whTqU0M2Ds22w=/0x390/smart/https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1506120378%2FMR_0917170472.jpg%3Fitok%3DaWyDp3CA',
            [
                new Ingredient('Cheese', 10),
                new Ingredient('Broccoli', 20),
                new Ingredient('Water', 30),
            ])
      ];

    constructor(
        // REPLACED BY NGRX THROUGH STORE
        // private slService: ShoppingListService,
        // private store: Store<{shoppingList: {ingredients: Ingredient[]}}>
        ) {}

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    // getRecipe(index: number) {
    //     return this.recipes[index];
    // }

    // WHOLE METHOD REPLACED BY NGRX THROUGH STORE
    // addIngredientsToShoppingList(ingredients: Ingredient[]) {
    //     this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
    //     // REPLACED BY NGRX THROUGH STORE
    //     // this.slService.addIngredients(ingredients);
    // }

    // addRecipe(recipe: Recipe) {
    //     this.recipes.push(recipe);
    //     this.recipesChanged.next(this.recipes.slice());
    // }

    // updateRecipe(index: number, newRecipe: Recipe) {
    //     this.recipes[index] = newRecipe;
    //     this.recipesChanged.next(this.recipes.slice());
    // }

    // deleteRecipe(index: number) {
    //     this.recipes.splice(index, 1);
    //     this.recipesChanged.next(this.recipes.slice());
    // }
}