import { Recipe } from '../class/Recipe.js';
import { recipes } from '../data/data.js';
import { createApplianceArray, createRecipesArray, createUstensilsArray, createIngredientsArray  } from '../Array/Array.js';


export const card = () =>{
  const gallery = document.querySelector(".gallery");
    for (let index = 0; index < recipes.length; index++) {
    const element = recipes[index];
    const recipe = new Recipe(element);
    gallery.insertAdjacentHTML("beforeend",recipe.createHtml());
    createApplianceArray(recipe.appliance);
    createRecipesArray(recipe.name);
    createUstensilsArray(recipe.ustensils);
    createIngredientsArray(recipe.ingredients)
  }
}