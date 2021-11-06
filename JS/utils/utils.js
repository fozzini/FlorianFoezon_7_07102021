
export const lowerCase = (value) => {
  return value.toLowerCase();
}

export const lowercaseArray = (array) => {
  let arr =[]
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    arr.push(element.toLowerCase())
  }
  return arr
}

export const loopObject = (myArray) => {
  let ingredientList = [];
  for (let i= 0; i < myArray.length; i++){
    ingredientList.push(myArray[i].ingredient.toLowerCase()) ;
  }
  return ingredientList
};

export const concatArray = (myArray) => {
  for (let i= 0; i < myArray.length; i++){
     myArray[i].toLowerCase() ;
  }
  
};

export const removeDouble = (array) => {
 let ens = new Set(array);
 return Array.from(ens);
};
