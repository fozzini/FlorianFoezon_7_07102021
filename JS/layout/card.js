import { Recipe } from '../class/Recipe.js';
import {recipesArray} from '../Array/Array.js';

export const card = () =>{
  const gallery = document.querySelector(".gallery");
  for (let index = 0; index < recipesArray.length; index++) {
  const element = recipesArray[index];
  console.log(element);
  const recipe = new Recipe(element);
  gallery.insertAdjacentHTML("beforeend",recipe.createHtml());
  }
}