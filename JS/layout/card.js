import { Recipe } from '../class/Recipe.js';

export const card = (array) =>{
  const gallery = document.querySelector(".gallery");
  const arrayRawHtml = [];
  for (let index = 0; index < array.length; index++) {
  const element = array[index];
  const recipe = new Recipe(element);
  arrayRawHtml.push(recipe.createHtml());
  }
  gallery.innerHTML = arrayRawHtml.join("");
};