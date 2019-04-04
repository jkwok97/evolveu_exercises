import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, children: [
        { path: '', component: RecipesStartComponent },
        { path: 'new', component: RecipesEditComponent, canActivate: [AuthGuard] },
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipesEditComponent, canActivate: [AuthGuard] },
    ] },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'signup', component: SignupComponent},
    { path: 'signin', component: SigninComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}