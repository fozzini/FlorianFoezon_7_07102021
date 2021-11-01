import { recipes } from "../data/data.js";
import { ingredientsArray, ustensilsArray, recipesArray, applianceArray, nameArray } from "../Array/Array.js";
import { card } from "../layout/card.js";
import { lowerCase } from "../utils/utils.js";
import { loopObject } from "../utils/utils.js";

export const searchInput = (input) => {
  input.oninput = () => {
    sortCard(input.value)}
};

const sortCard = (value) => {
  recipesArray.length = 0;
  for (let index = 0; index < recipes.length; index++) {
    if ((loopObject(ingredientsArray[index]).includes(value.toLowerCase())) ||
      ustensilsArray[index].map(lowerCase).includes(value.toLowerCase()) ||
      nameArray[index].toLowerCase().includes(value.toLowerCase()) ||
      applianceArray[index].toLowerCase().includes(value.toLowerCase()))
    {
      recipesArray.push(recipes[index]);
    }
  }
  card(recipesArray);
};