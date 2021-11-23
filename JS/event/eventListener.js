
import { filteredRecipesArray, tagListArray } from "../array/array.js";
import { eventAppliance, eventIngredients, eventUstensils, globalSearch } from "../index/index.js";
import { sortCard} from "../sort/sort.js";
import { filterArrayWithTags } from "../utils/utils.js";


export const eventCreator = (event, btnColor) => {
  const tagList = document.getElementById("taglist");
  for (let i = 0; i < event.length; i++) {
    event[i].addEventListener("click", (e) =>{
      let text = e.target.innerText;
      const tagHtml = `<button type="button" class="tag btn ${btnColor}
      ml-0 mr-2 mb-2 p-1 pr-2 pl-2 d-flex align-items-center">
      <small>${text}</small><i class="far fa-times-circle ml-2"></i></button>` 
      tagListArray.push(text);    
      tagList.insertAdjacentHTML('beforeend', tagHtml);
      sortCard(e.target.innerText, "globals");
      filterArrayWithTags(filteredRecipesArray, tagListArray)
      closeTagListener();
    })
  }
};

export const closeTagListener = () => {
  const close = document.querySelectorAll("i.far.fa-times-circle.ml-2");
  close[close.length -1].addEventListener("click", (event) =>{
    let node = event.target.parentNode;
    node.parentNode.removeChild(node)
    for (let index = 0; index < tagListArray.length; index++) {
      const element = tagListArray[index];
      if ( element === node.innerText.trim()) { 
        tagListArray.splice(index, 1)}
    }
  })
}
  
export const globalInputEvent= () => {
  globalSearch.addEventListener("input",() =>{
    if (globalSearch.value.length >= 3) {
      sortCard(globalSearch.value, "globals");
    }
    else {sortCard("", "globals");}
  })
}

export const eventItems = () => {
  eventCreator(eventIngredients,"btn-primary");
  eventCreator(eventAppliance,"btn-success");
  eventCreator(eventUstensils,"btn-danger");
};

