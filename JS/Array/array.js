import { recipes } from "../data/data.js";

export let recipesArray = [];
export let applianceArray = [];
export let ustensilsArray = [];
export let nameArray = [];
export let ingredientsArray = [];

export const createRecipesArray = () =>{
  recipesArray=recipes
};

export const arrayCreator = (array, property) => {
  for (let index = 0; index < recipesArray.length; index++) {
    const element = recipesArray[index][property];
    array.push(element);
  }
};
