import { recipes } from "../data/data.js";
import { ingredientsArray, ustensilsArray, recipesArray, applianceArray, nameArray } from "../Array/Array.js";
import { card } from "../layout/card.js";
import { concatArray, lowerCase } from "../utils/utils.js";
import { loopObject } from "../utils/utils.js";
import { applianceSet, ingredientSet, nameArraySet, ustensilsSet } from "../set/set.js";
import { createSuggestion } from "./suggestion.js";

export const searchInput = (input) => {
  input.oninput = () => {
    sortCard(input.value)}
};

const sortCard = (value) => {
  resetArray();
  for (let index = 0; index < recipes.length; index++) {
    if (setCondition(index, value))
    {
      setArrays(index);
    }
  }
  card(recipesArray);
  // createSuggestion(ingredientSet, "ingredientsgst")
  // createSuggestion(ustensilsSet, "ustensilsgt")
  createSuggestion(applianceSet, "appliancesgt")
};

const resetArray = () => {
  recipesArray.length = 0;
  applianceSet.clear();
  nameArraySet.clear();
  ustensilsSet.clear();
  ingredientSet.clear();
};

const setArrays = (index) => {
  recipesArray.push(recipes[index]);
  applianceSet.add(applianceArray[index].toLowerCase())
  nameArraySet.add(nameArray[index].toLowerCase())
  ustensilsSet.add(concatArray(ustensilsArray[index].map(lowerCase)))
  ingredientSet.add(concatArray(loopObject(ingredientsArray[index])))
};

const setCondition = (index, value) => { 
  return loopObject(ingredientsArray[index]).includes(value.toLowerCase()) ||
  ustensilsArray[index].map(lowerCase).includes(value.toLowerCase()) ||
  nameArray[index].toLowerCase().includes(value.toLowerCase()) ||
  applianceArray[index].toLowerCase().includes(value.toLowerCase())
};