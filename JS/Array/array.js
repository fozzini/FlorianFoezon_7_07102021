export const applianceArray = [];
export const ustensilsArray = [];
export const recipesArray = [];
export const ingredientsArray = [];

export const createApplianceArray = (item) =>{
  applianceArray.push(item);
}

export const createUstensilsArray = (item) =>{
  for (let index = 0; index < item.length; index++) {
    ustensilsArray.push(item[index]);
  }
}

export const createRecipesArray = (item) =>{
    recipesArray.push(item);
}

export const createIngredientsArray = (item) =>{
  for (let index = 0; index < item.length; index++) {
    ingredientsArray.push(item[index].ingredient);
  }
}

console.log(applianceArray,ustensilsArray,recipesArray,ingredientsArray)