import { ingredientsArray, ustensilsArray, recipesArray, applianceArray, nameArray, arrayCreator, filteredNameArray, filteredApplianceArray, filteredUstensilsArray, filteredIngredientsArray, filteredRecipesArray, tagListArray } from "../array/array.js";
import { eventItems } from "../event/eventListener.js";
import { card } from "../layout/card.js";
import { lowerCase, lowercaseArray, objectProperty, removeDouble } from "../utils/utils.js";
import { loopObject } from "../utils/utils.js";
import { createSuggestion } from "./suggestion.js";


export const searchInput = (input, condition) => {
  input.oninput = () => {
    sortCard(input.value, condition)}
};

export const createArr = () => {
  for (let i = 0; i < recipes.length; i++) {
    const { name, ingredients, ustensils} = recipes[i];
  }
}
export const sortCard = (value, condition) => {

  
  // resetArray();

  // for (let index = 0; index < recipesArray.length; index++) {
  //   if (setCondition(index, value, condition))
  //   {
  //     filteredRecipesArray.push(recipesArray[index]);
  //   }
  // }
  // setArrays();
  // displayItems();
  // eventItems();
};

export const setArrays = () => {
  arrayCreator(filteredApplianceArray, "appliance");
  arrayCreator(filteredNameArray, "name");
  arrayCreator(filteredUstensilsArray, "ustensils");
  arrayCreator(filteredIngredientsArray, "ingredients");
};

const resetArray = () => {
  filteredRecipesArray.length = 0;
  filteredApplianceArray.length = 0;
  filteredUstensilsArray.length = 0;
  filteredNameArray.length = 0;
  filteredIngredientsArray.length = 0;
};

export const setCondition = (index, value, condition) => { 
  const ingredientsCondition = loopObject(ingredientsArray[index]).includes(value.toLowerCase());
  const ustensilsCondition = ustensilsArray[index].map(lowerCase).includes(value.toLowerCase());
  const nameCondition = nameArray[index].toLowerCase().includes(value.toLowerCase());
  const applianceCondition = applianceArray[index].toLowerCase().includes(value.toLowerCase());
  
  switch (condition) {
    case "ingredients":
      return ingredientsCondition;
    case "ustensils":
      return ustensilsCondition;
    case "appliance":
      return applianceCondition;    
    case "globals":
      return ingredientsCondition || ustensilsCondition || nameCondition;
    default:
      break;
  }
};

export const displayItems = () => {
  card(filteredRecipesArray);
  createSuggestion(removeDouble(lowercaseArray(objectProperty(filteredIngredientsArray.flat()))), "ingredientsgst")
  createSuggestion(removeDouble(lowercaseArray( filteredUstensilsArray.flat())), "ustensilsgt")
  createSuggestion(removeDouble(lowercaseArray(filteredApplianceArray)), "appliancesgt")
}

