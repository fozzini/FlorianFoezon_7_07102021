
export const suggestion = (value) =>{return `<a class="dropdown-item text-light" href="#"> ${value}</a>`}

export const createSuggestion = (itemArray, loc) => {
  console.log(itemArray);
  const location = document.getElementById(loc);
  const array = [];
  for (let index = 0; index < itemArray.length; index++) {
    const element = itemArray[index];
    console.log(suggestion(element));
    array.push(suggestion(element));
  }
  console.log(array);
  location.innerHTML= array;
}