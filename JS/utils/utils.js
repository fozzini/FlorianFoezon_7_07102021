
export const lowerCase = (value) => {
  return value.toLowerCase();
}

export const loopObject = (myArray) => {
  let ingredientList = [];
  for (let i= 0; i < myArray.length; i++){
    ingredientList.push(myArray[i].ingredient.toLowerCase()) ;
  }
  return ingredientList
};
