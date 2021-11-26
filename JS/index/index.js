import { displayItems, searchInput } from '../filter/filter.js';
import { eventItems, globalInputEvent } from '../event/eventListener.js';
import { createArrays } from '../array/array.js';
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
createArrays(recipes, true);
displayItems(recipes)  ;
searchInput(ingredientsSearch, "ingredients");
searchInput(applianceSearch, "appliance");
searchInput(ustensilsSearch, "ustensils");
globalInputEvent();
eventItems();
};
 
init();

