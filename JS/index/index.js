import { displayItems, searchInput } from '../sort/sort.js';
import {applianceArray, arrayCreator, ingredientsArray, nameArray, ustensilsArray} from '../array/array.js';

import { getData } from "../data/getData.js";

let globalSearch = document.getElementById("search");
let ingredientsSearch = document.getElementById("ingredientsBtn") ;
let applianceSearch = document.getElementById("applianceBtn") ;
let ustensilsSearch = document.getElementById("ustensilsBtn") ;

const init = async () =>{
await getData();
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