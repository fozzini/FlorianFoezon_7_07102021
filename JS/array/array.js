
export let mainArray = [];
export let applianceArray = [];
export let ustensilsArray = [];
export let nameArray = [];
export let ingredientsArray = [];
export let tagListArray = [];


export const createArrays = (array, isInit) => {
  resetArrays();
  for (let i = 0; i < array.length; i++) {
    let { name, ingredients, ustensils, appliance} = array[i];
    let ingrarr = [];
    let ustarr = [];
    let tempArray =[];
    
    for (let i = 0; i < ingredients.length; i++) {
      const {ingredient} = ingredients[i];
      ingrarr.push(ingredient.toLowerCase());
      tempArray.push(ingredient.toLowerCase())
    }
    for (let i = 0; i < ustensils.length; i++) {
      const ustensil = ustensils[i];
      ustarr.push(ustensil.toLowerCase());
      tempArray.push(ustensil.toLowerCase())
    }
    nameArray.push(name.toLowerCase());
    applianceArray.push(appliance.toLowerCase());
    ingredientsArray.push(ingrarr);
    ustensilsArray.push(ustarr);
    tempArray.push(name.toLowerCase(),appliance.toLowerCase());
    if(isInit == true){
      mainArray.push(tempArray);
    }
  }
}

export const resetArrays = () => {
  
  applianceArray.length = 0;
  ustensilsArray.length = 0;
  nameArray.length = 0;
  ingredientsArray.length = 0;
  
};
