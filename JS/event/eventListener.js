
import { fullArray, mainArray, tagListArray } from "../array/array.js";
import { applianceDropdownList, applianceSearch, eventAppliance, eventIngredients, eventUstensils, globalSearch, ingredientsDropdownList, ingredientsSearch, ustensilsDropdownList, ustensilsNodes, ustensilsSearch } from "../dom/domNodes.js";
import { filter } from "../filter/filter.js";

/* évennements liés aux tags */

export const tagEvent = () => {
  tagEventCreator(eventIngredients,"btn-primary");
  tagEventCreator(eventAppliance,"btn-success");
  tagEventCreator(eventUstensils,"btn-danger");
};

export const tagEventCreator = (event, btnColor) => {
  const tagList = document.getElementById("taglist");
  for (let i = 0; i < event.length; i++) {
    event[i].addEventListener("click", (e) =>{
      let text = e.target.innerText;
      const tagHtml = `<button type="button" class="tag btn ${btnColor}
      ml-0 mr-2 mb-2 p-1 pr-2 pl-2 d-flex align-items-center">
      <small>${text}</small><i class="far fa-times-circle ml-2"></i></button>` 
      tagListArray.push(text);    
      tagList.insertAdjacentHTML('beforeend', tagHtml);
      filter(fullArray);
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
    filter(fullArray);
  })
}

/* évennements liés aux inputs */
export const inputEvent = () => {
  searchInput(ingredientsSearch, ingredientsDropdownList);
  searchInput(applianceSearch, applianceDropdownList);
  searchInput(ustensilsSearch, ustensilsDropdownList);
  globalInputEvent();
};

export const searchInput = (input, dropdownlist) => {
  input.addEventListener("input",() =>{
    for (let i = 0; i < dropdownlist.length; i++) {
      const element = dropdownlist[i].innerText;
      if(element.includes(input.value)){
        console.log(element);
        console.log(input.value)
        dropdownlist[i].style.display = "block";
      }
      else{
        dropdownlist[i].style.display = "none";
      }
    }
  });
}

const globalInputEvent= () => {
  tagListArray.unshift("");
  globalSearch.addEventListener("input",() =>{
    if (globalSearch.value.length >= 3) {
      tagListArray.splice(0, 1, globalSearch.value);
      filter(mainArray);
    }
    else {tagListArray.splice(0, 1, "");
      filter(mainArray);
    }
  })
}
/* évenement changement de valeur du placeholder */
export const placeHolderEvent = () => {
placeHolderListener(ingredientsSearch, "cherche un ingrédient", "ingrédients");
placeHolderListener(applianceSearch, "cherche un appareil", "appareil");
placeHolderListener(ustensilsSearch, "cherche un ustensile", "ustensiles");
}
const placeHolderListener = (node, inText, outText) => {
    node.addEventListener("focusin",() =>{
    node.placeholder=inText;
  })
    node.addEventListener("focusout",() =>{
    node.placeholder=outText;
  })
}



