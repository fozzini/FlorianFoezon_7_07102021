export let recipesArray = [];
export let applianceArray = [];
export let ustensilsArray = [];
export let nameArray = [];
export let ingredientsArray = [];
export let filteredRecipesArray = [];
export let filteredApplianceArray = [];
export let filteredUstensilsArray = [];
export let filteredNameArray = [];
export let filteredIngredientsArray = [];
export let tagListArray = [];

export const createRecipesArray = (data) =>{
  const recipes = data;
  for (let index = 0; index < recipes.length; index++) {
    const element = recipes[index];
    recipesArray.push(element);
    filteredRecipesArray.push(element)
  }
};

export const arrayCreator = (array, property) => {
  for (let index = 0; index < filteredRecipesArray.length; index++) {
    const element = filteredRecipesArray[index][property];
    array.push(element);
  }
}
