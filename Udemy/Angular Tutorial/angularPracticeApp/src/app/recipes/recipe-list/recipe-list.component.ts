import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://images.ecosia.org/du_VUNwuhkMcqGK7HQCp4WNMaKA=/0x390/smart/https%3A%2F%2Fs3.amazonaws.com%2Fsparkpeople%2Fguid%2FChili-Beef-Polenta-Bake%2F53f48dda-9c98-4c85-a226-7f19b34b98ad.jpg'),
    new Recipe('A Test2 Recipe', 'This is a test2', 'https://images.ecosia.org/BUHfI_sOcwBfl5whTqU0M2Ds22w=/0x390/smart/https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1506120378%2FMR_0917170472.jpg%3Fitok%3DaWyDp3CA')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected = (recipe: Recipe) => {
    this.recipeWasSelected.emit(recipe);
  }

}
