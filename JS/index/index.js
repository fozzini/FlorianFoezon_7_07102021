import { displayItems, searchInput, setArrays } from '../sort/sort.js';
import { applianceArray, arrayCreator, createRecipesArray, ingredientsArray, nameArray, ustensilsArray } from '../array/array.js';
import { eventCreator, globalInputEvent } from '../event/eventListener.js';
import { recipes } from '../data/data.js';


export let globalSearch = document.getElementById("search");
export let ingredientsSearch = document.getElementById("ingredientsBtn") ;
export let applianceSearch = document.getElementById("applianceBtn") ;
export let ustensilsSearch = document.getElementById("ustensilsBtn") ;

export const ingredientNodes = document.getElementById("ingredientsgst");
export const applianceNodes = document.getElementById("appliancesgt");
export const ustensilsNodes = document.getElementById("ustensilsgt");

export const eventIngredients = ingredientNodes.getElementsByTagName("a")
export const eventAppliance = applianceNodes.getElementsByTagName("a");
export const eventUstensils = ustensilsNodes.getElementsByTagName("a");

const init =  () =>{
createRecipesArray(recipes);
arrayCreator(applianceArray, "appliance");
arrayCreator(nameArray, "name");
arrayCreator(ustensilsArray, "ustensils");
arrayCreator(ingredientsArray, "ingredients");
setArrays();
globalInputEvent();
searchInput(ingredientsSearch, "ingredients");
searchInput(applianceSearch, "appliance");
searchInput(ustensilsSearch, "ustensils");
displayItems();
eventCreator(eventIngredients,"btn-primary");
eventCreator(eventAppliance,"btn-success");
eventCreator(eventUstensils,"btn-danger");

};

init();

