import { tagListArray } from "../array/array.js";
import { globalSearch } from "../index/index.js";
import { sortCard } from "../sort/sort.js";


export const eventCreator = (event, btnColor) => {
  const tagList = document.getElementById("taglist");
  for (let i = 0; i < event.length; i++) {
    event[i].addEventListener("click", () =>{
      let text = event[i].innerHTML;
      const tagHtml = `<button type="button" class="tag btn ${btnColor}
      ml-0 mr-2 mb-2 p-1 pr-2 pl-2 d-flex align-items-center">
      <small>${text}</small><i class="far fa-times-circle ml-2"></i></button>`
      tagListArray.push(text);
      // filterArrayWithTags();
      tagList.insertAdjacentHTML('beforeend', tagHtml);
      closeTagListener(event);
    })
  }
};

export const closeTagListener = (event) => {
  const close = document.querySelectorAll("i.far.fa-times-circle.ml-2");
  const tag = document.getElementsByClassName("tag");
  for (let index = 0; index < close.length; index++) {
    close[index].addEventListener("click", () =>{
      try {
        tag[index].parentNode.removeChild(tag[index]);
      } catch (error) {}  
      if ( tagListArray[index] === event[index].innerHTML) { 
        tagListArray.splice(index, 1); 
      }
    })
  }
};

export const globalInputEvent= () => {
  globalSearch.addEventListener("input",() =>{
    if (globalSearch.value.length >= 3) {
      sortCard(globalSearch.value, "globals");
    }
    else {sortCard("", "globals")}
  })
}