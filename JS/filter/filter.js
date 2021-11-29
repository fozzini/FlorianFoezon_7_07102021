import { createArrays, tagListArray, mainArray} from "../array/array.js";
import { recipes } from "../data/data.js";
import { message } from "../dom/domNodes.js";
import { tagEvent } from "../event/eventListener.js";
import { displayItems } from "../utils/utils.js";

/* filtrage des tableaux */

export const filter = (array) => {
  let filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    let answerArray = [];
    for (let j = 0; j < tagListArray.length; j++) {
      if (array[i].some(element => element.includes(tagListArray[j]))){
        answerArray.push("true");
      }
      else {answerArray.push("false")};
    }
    if(answerArray.includes("false") == false){ filteredArray.push(recipes[i]);}
  }
  if (filteredArray.length == 0){
    message.style.display = "block";
  }
  else {message.style.display = "none";};
  createArrays(filteredArray, false);
  displayItems(filteredArray);
  tagEvent();
};





