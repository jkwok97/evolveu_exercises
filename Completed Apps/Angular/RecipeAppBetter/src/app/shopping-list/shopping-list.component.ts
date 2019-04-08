import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Ingredient } from '../shared/ingredient.model'
// import { ShoppingListService } from './shopping-list.service';
import * as fromShoppingList from './store/shopping-list.reducers';
import * as ShoppingListActions from './store/shopping-list.actions';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  shoppingListState: Observable<{ingredients: Ingredient[]}>;
  // REPLACED BY NGRX THROUGH STORE
  // private subscription: Subscription;

  constructor(
    // private slService: ShoppingListService,
    private store: Store<fromShoppingList.AppState>
    ) { }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
    // REPLACED BY NGRX THROUGH STORE
    // this.subscription = this.slService.ingredientsChanged.subscribe(
    //   (ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
    //   }
    // );
  }

  onEditItem(index: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
    // REPLACED BY NGRX THROUGH STORE
    // this.slService.startedEditing.next(index);
  }

  ngOnDestroy() {
    // REPLACED BY NGRX THROUGH STORE
    // this.subscription.unsubscribe();
  }
}
