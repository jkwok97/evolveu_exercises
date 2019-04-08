import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';

import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
    recipes: State;
}

export interface State {
    recipes: Recipe[];
}

const initialState: State = {
    recipes: [
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
      ]
};

export function recipeReducer( state = initialState, action: RecipeActions.RecipeActions){
    switch (action.type) {
        case (RecipeActions.SET_RECIPES):
            return {
                ...state,
                recipes: [...action.payload]
            };
        case (RecipeActions.ADD_RECIPE):
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            };
        case (RecipeActions.UPDATE_RECIPE):
            const recipe = state.recipes[action.payload.index];
            const updatedRecipe = {
                ...recipe,
                ...action.payload.updatedRecipe
            };
            const recipes = [...state.recipes];
            recipes[action.payload.index] = updatedRecipe;
            return {
                ...state,
                recipes: recipes
            };
        case (RecipeActions.DELETE_RECIPE):
            const oldRecipes = [...state.recipes];
            oldRecipes.splice(action.payload, 1);
            return {
              ...state,
              recipes: oldRecipes
            };
        default:
            return state;
    }
}