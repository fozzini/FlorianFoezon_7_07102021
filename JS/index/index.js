import { displayItems, searchInput, setArrays } from '../sort/sort.js';
import {applianceArray, arrayCreator, createRecipesArray, ingredientsArray, nameArray, ustensilsArray} from '../Array/Array.js';

let globalSearch = document.getElementById("search");
let ingredientsSearch = document.getElementById("ingredientsBtn") ;
let applianceSearch = document.getElementById("applianceBtn") ;
let ustensilsSearch = document.getElementById("ustensilsBtn") ;

const init = () =>{
createRecipesArray();
arrayCreator(applianceArray, "appliance");
arrayCreator(nameArray, "name");
arrayCreator(ustensilsArray, "ustensils");
arrayCreator(ingredientsArray, "ingredients");
searchInput(globalSearch, "globals");
searchInput(ingredientsSearch, "ingredients");
searchInput(applianceSearch, "appliance");
searchInput(ustensilsSearch, "ustensils");
displayItems();
};

init();