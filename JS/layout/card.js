import { Recipe } from '../class/Recipe.js';
import { recipes } from '../recipes/recipes.js';

export const card = () =>{
  const gallery = document.querySelector(".gallery");
    for (let index = 0; index < recipes.length; index++) {
    const element = recipes[index];
    const recipe = new Recipe(element);
    gallery.insertAdjacentHTML("beforeend",recipe.createHtml());
  }
}