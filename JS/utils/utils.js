import { applianceArray, ingredientsArray, nameArray, ustensilsArray } from "../array/array.js";
import { card } from "../layout/card.js";
import { createDropdown } from "../layout/dropdown.js";

/* enlève les doublons */
export const removeDouble = (array) => {
 let ens = new Set(array);
 return Array.from(ens).sort();
};

/* reinitialise les tableaux */
export const resetArrays = () => {
  applianceArray.length = 0;
  ustensilsArray.length = 0;
  nameArray.length = 0;
  ingredientsArray.length = 0;
};

/* affiche les éléments */
export const displayItems = (array) => {
  card(array)
  createDropdown(removeDouble(ingredientsArray.flat()), "ingredientsgst", "firstGroup")
  createDropdown(removeDouble(ustensilsArray.flat()), "ustensilsgt", "secondGroup")
  createDropdown(removeDouble(applianceArray), "appliancesgt", "thirdGroup")
}
