/* les noeuds à cibler dans le dom */
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

export const ingredientsDropdownList = document.getElementsByClassName("firstGroup")
export const ustensilsDropdownList = document.getElementsByClassName("secondGroup")
export const applianceDropdownList = document.getElementsByClassName("thirdGroup")
