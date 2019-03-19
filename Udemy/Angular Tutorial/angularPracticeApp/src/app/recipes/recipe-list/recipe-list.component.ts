import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://images.ecosia.org/du_VUNwuhkMcqGK7HQCp4WNMaKA=/0x390/smart/https%3A%2F%2Fs3.amazonaws.com%2Fsparkpeople%2Fguid%2FChili-Beef-Polenta-Bake%2F53f48dda-9c98-4c85-a226-7f19b34b98ad.jpg'),
    new Recipe('A Test Recipe', 'This is a test', 'https://images.ecosia.org/du_VUNwuhkMcqGK7HQCp4WNMaKA=/0x390/smart/https%3A%2F%2Fs3.amazonaws.com%2Fsparkpeople%2Fguid%2FChili-Beef-Polenta-Bake%2F53f48dda-9c98-4c85-a226-7f19b34b98ad.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
