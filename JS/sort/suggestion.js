
export const suggestion = (value) =>{return `<a class="dropdown-item text-light" href="#"> ${value}</a>`}

export const createSuggestion = (itemArray, loc) => {
  const location = document.getElementById(loc);
  const array = [];
  for (let index = 0; index < itemArray.length; index++) {
    const element = itemArray[index];
    array.push(suggestion(element));
  }
  location.innerHTML(array);
}