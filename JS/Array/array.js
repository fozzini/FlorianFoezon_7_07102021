
export const applianceArray = [];
export const ustensilsArray = [];
export const recipesArray = [];
export const ingredientsArray = [];
export let sortedApplianceArray = [];
export let sortedUstensilsArray = [];
export let sortedIngredientsArray = [];

export const createApplianceArray = (item) =>{
  applianceArray.push([item.toLowerCase()]);
}

export const createUstensilsArray = (item) =>{
  let array = [];
  for (let index = 0; index < item.length; index++) {
    array.push(item[index].toLowerCase());
  }
  ustensilsArray.push(array);
}

export const createRecipesArray = (item) =>{
    recipesArray.push(item.toLowerCase());
}

export const createIngredientsArray = (item) =>{
  let array = [];
  for (let index = 0; index < item.length; index++) {
    array.push(item[index].ingredient.toLowerCase());
  }
  ingredientsArray.push(array);
}

// export const createSortedApplianceArray = () => {
//   for (let index = 0; index < applianceArray.length; index++) {
//     const element = applianceArray[index];
//     sortedApplianceArray.push(element);
//   }
//   console.log(sortedApplianceArray);
// }
// export const createSortedIngredientsArray = () => {
//   const array = [];
//   for (let index = 0; index < ingredientsArray.length; index++) {
//     const element = ingredientsArray[index];
//     array.push(element);
//   }
  
  
// }
// export const createSortedUstensilsArray = () => {
//   const array = [];
//   for (let index = 0; index < ustensilsArray.length; index++) {
//     const element = ustensilsArray[index];
//     array.push(element);
//   }
//   sortedUstensilsArray = array;
//   console.log(sortedUstensilsArray);
// }
