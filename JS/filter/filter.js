import { ingredientsArray, ustensilsArray, applianceArray, createArrays, tagListArray, mainArray} from "../array/array.js";
import { card } from "../layout/card.js";
import { removeDouble } from "../utils/utils.js";
import { createDropdown } from "../layout/dropdown.js";
import { recipes } from "../data/data.js";
import { eventItems } from "../event/eventListener.js";


export const searchInput = (input, condition) => {
  input.oninput = () => {
    filterWithTags();
};
}



export const filterWithTags = () => {
  let filteredArray = [];
  for (let i = 0; i < mainArray.length; i++) {
    let answerArray = [];
    for (let j = 0; j < tagListArray.length; j++) {
      if (mainArray[i].some(element => element.includes(tagListArray[j]))){
        answerArray.push("true");
      }
      else {answerArray.push("false")};
    }
    if(answerArray.includes("false") == false){ filteredArray.push(recipes[i]);}
  }
  createArrays(filteredArray, false);
  displayItems(filteredArray);
  eventItems();
};

export const displayItems = (array) => {
  card(array);
  createDropdown(removeDouble(ingredientsArray.flat()), "ingredientsgst")
  createDropdown(removeDouble(ustensilsArray.flat()), "ustensilsgt")
  createDropdown(removeDouble(applianceArray), "appliancesgt")
}




