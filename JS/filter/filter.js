import { createArrays, tagListArray, mainArray} from "../array/array.js";
import { recipes } from "../data/data.js";
import { message } from "../dom/domNodes.js";
import { tagEvent } from "../event/eventListener.js";
import { displayItems } from "../utils/utils.js";

/* filtrage des tableaux */

export const filter = (array) => {
  let filteredArray = [];
  array.forEach((element, i) => {
    let answerArray = [];
    tagListArray.forEach(tag => {
      if (element.some(search => search.includes(tag))){
        answerArray.push("true");
      }
      else {answerArray.push("false")};
    })
    if(answerArray.includes("false") == false){ filteredArray.push(recipes[i]);}
    console.log(i);
  })
  if (filteredArray.length == 0){
    message.style.display = "block";
  }
  else {message.style.display = "none";};
  createArrays(filteredArray, false);
  displayItems(filteredArray);
  tagEvent();
};





