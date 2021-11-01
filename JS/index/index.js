import { searchInput } from '../sort/sort.js';
import {applianceArray, arrayCreator, createRecipesArray, ingredientsArray, nameArray, recipesArray, ustensilsArray} from '../Array/Array.js';
import {card} from '../layout/card.js';

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
searchInput(globalSearch);
searchInput(ingredientsSearch);
searchInput(applianceSearch);
searchInput(ustensilsSearch);
card(recipesArray);
};

init();