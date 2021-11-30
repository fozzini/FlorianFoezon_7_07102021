
/* création des dropdowns */

const dropdownItem = (value, classe) =>{return `<a class="dropdown-item text-light ${classe}" href="#"> ${value}</a>`}

export const createDropdown = (itemArray, loc, classe) => {
  const location = document.getElementById(loc);
  const array = [];
  for (let index = 0; index < itemArray.length; index++) {
    const element = itemArray[index];
    array.push(dropdownItem(element, classe));
  }
  location.innerHTML= array.join("");
}