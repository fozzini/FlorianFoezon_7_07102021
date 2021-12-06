import { resetArrays } from "../utils/utils.js";

/* tableaux */
export let mainArray = [];
export let fullArray = [];
export let applianceArray = [];
export let ustensilsArray = [];
export let nameArray = [];
export let ingredientsArray = [];
export let descriptionArray = [];
export let tagListArray = [];

/* création des tableaux */

export const createArrays = (array, isInit) => {
  resetArrays();
  for (let i = 0; i < array.length; i++) {
    let { name, ingredients, ustensils, appliance, description} = array[i];
    let ingrarr = [];
    let ustarr = [];
    let tempArray =[];
    let tempArray2 =[];
    
    for (let i = 0; i < ingredients.length; i++) {
      const {ingredient} = ingredients[i];
      ingrarr.push(ingredient.toLowerCase());
      tempArray.push(ingredient.toLowerCase());
      tempArray2.push(ingredient.toLowerCase());
    }
    for (let i = 0; i < ustensils.length; i++) {
      const ustensil = ustensils[i];
      ustarr.push(ustensil.toLowerCase());
      tempArray2.push(ustensil.toLowerCase());
    }
    descriptionArray.push(description.toLowerCase())
    nameArray.push(name.toLowerCase());
    applianceArray.push(appliance.toLowerCase());
    ingredientsArray.push(ingrarr);
    ustensilsArray.push(ustarr);
    tempArray.push(name.toLowerCase(),description.toLowerCase());
    tempArray2.push(name.toLowerCase(),description.toLowerCase(),appliance.toLowerCase());
    if(isInit == true){
      mainArray.push(tempArray);
      fullArray.push(tempArray2);
    }
  }
}
