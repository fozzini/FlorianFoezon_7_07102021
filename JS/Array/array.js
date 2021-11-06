import { recipes } from "../data/data.js";

export let recipesArray = [];
export let applianceArray = [];
export let ustensilsArray = [];
export let nameArray = [];
export let ingredientsArray = [];
export let filteredApplianceArray = [];
export let filteredUstensilsArray = [];
export let filteredNameArray = [];
export let filteredIngredientsArray = [];

export const createRecipesArray = () =>{
  for (let index = 0; index < recipes.length; index++) {
    const element = recipes[index];
    recipesArray.push(element);
  }
};

export const arrayCreator = (array, property) => {
  for (let index = 0; index < recipesArray.length; index++) {
    const element = recipesArray[index][property];
    array.push(element);
  }
  console.log(array);
}
