// THIS IS NOT BEING USED BECAUSE OF NGRX

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
    constructor(
        private httpClient: HttpClient,
        private recipeService: RecipeService,
        // private authService: AuthService
        ){}

    storeRecipes() {
        const req = new HttpRequest('PUT', 'https://recipe-book-5a7de.firebaseio.com/recipes.json',
            this.recipeService.getRecipes(), {
                reportProgress: true,
            })
        return this.httpClient.request(req);
    }

    getRecipes() {
        this.httpClient.get<Recipe[]>(
            'https://recipe-book-5a7de.firebaseio.com/recipes.json',{
                observe: 'body',
                responseType: 'json',
                // params: new HttpParams().set('auth', token)
            })
            .map(
            (recipes) => {
                console.log(recipes);
                for (let recipe of recipes) {
                    if (!recipe['ingredients']) {
                        console.log(recipe);
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
                // return [];
            }
        ).subscribe(
            (recipes) => {
                this.recipeService.setRecipes(recipes);
            }
        )
    }
}