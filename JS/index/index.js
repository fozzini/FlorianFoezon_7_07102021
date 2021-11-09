import { displayItems, searchInput, setArrays } from '../sort/sort.js';
import { applianceArray, arrayCreator, ingredientsArray, nameArray, ustensilsArray } from '../array/array.js';
import { getData } from "../data/getData.js";
import { eventCreator } from '../event/eventListener.js';


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

const init = async () =>{
await getData();
arrayCreator(applianceArray, "appliance");
arrayCreator(nameArray, "name");
arrayCreator(ustensilsArray, "ustensils");
arrayCreator(ingredientsArray, "ingredients");
setArrays();
searchInput(globalSearch, "globals");
searchInput(ingredientsSearch, "ingredients");
searchInput(applianceSearch, "appliance");
searchInput(ustensilsSearch, "ustensils");
displayItems();
eventCreator(eventIngredients, ingredientsSearch, "btn-primary");
eventCreator(eventAppliance, applianceSearch, "btn-success");
eventCreator(eventUstensils, ustensilsSearch, "btn-danger");
};

init();

